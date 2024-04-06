import DataGrid, {
    Column,
    // ColumnChooser,
    Toolbar,
    Item,
    // Position,
    StateStoring,
    Scrolling,
    LoadPanel,
    FilterRow,
    Paging,
    Selection,
    Editing,
  } from 'devextreme-react/data-grid';
  import { useTranslation } from 'react-i18next';
  import { DatePicker, Switch } from 'antd';
  import dayjs from 'dayjs';
  import utc from 'dayjs/plugin/utc';
  import ButtonIcon from '../ButtonIcon';
  import UploadOutlined from '../../assets/svg/UploadOutlined';
  import PlusOutlined from '../../assets/svg/PlusOutlined';
  import IoMdResize from '../../assets/svg/IoMdResize';
  import ReloadOutlined from '../../assets/svg/ReloadOutlined';
  import SearchOutlined from '../../assets/svg/SearchOutlined';
  import FaCirclePlay from '../../assets/svg/FaCirclePlay';
  import FaCirclePause from '../../assets/svg/FaCirclePause';
  import ArrowGoBack from '../../assets/svg/ArrowGoBack';
  import LuRefresh from '../../assets/svg/LuRefresh';
  import styles from './styles.module.scss';
  dayjs.extend(utc);
  
  // column props
  interface ColumnConfig {
    dataField: string;
    caption: string;
    cellRender?: any;
    addition?: any;
    dataType?: any;
  }
  // datagrid props
  interface CDataGridProps {
    children?: React.ReactNode;
    gridKey?: any;
    className?: any;
    data: any;
    refSource?: any;
    height?: string;
    columns?: ColumnConfig[] | [];
    handleOpenEditModal?: (data: any) => void;
    handleOpenDeleteModal?: (data: any) => void;
    handleOpenModal?: () => void;
    handleOpenSearch?: () => void;
    handleUploadModal?: () => void;
    handleOpenChangePasswordModal?: (data: any) => void;
    handleAssignSpa?: (data: any) => void;
    handleAutoSize?: () => void;
    handleRefresh?: () => void;
    handleBackButton?: () => void;
    handleImport?: () => void;
    handleSave?: (data: any) => void;
    handleStartAllBot?: (data: any) => void;
    handleStopAllBot?: (data: any) => void;
    onSelectionChanged?: (data: any) => void;
    selectedRowKeys?: any;
    allowEditing?: boolean;
    exportButtonTitle?: string;
    isVisible?: true;
    addLogicVisible?: boolean;
    editButtonVisible?: boolean;
    changePasswordButtonVisible?: boolean;
    deleteButtonVisible?: boolean;
    deleteBotVisible?: boolean;
    assignSpaVisible?: boolean;
    refreshVisible?: boolean;
    saveVisible?: boolean;
    startStopBotVisible?: boolean;
    startAllBotVisible?: boolean;
    stopAllBotVisible?: boolean;
    startBotDisabled?: boolean;
    stopBotDisabled?: boolean;
    multiselect?: boolean;
    autoSizeVisible?: boolean;
    linkToVisible?: boolean;
    backButtonVisible?: boolean;
    linkTo?: (data: any) => void;
    enableSwitchVisible?: boolean;
    handleEnable?: (data: any) => void;
    importButtonVisible?: boolean;
    // columnChooserButtonVisible?: boolean;
    searchVisible?: boolean;
    toolbarVisible?: boolean;
    customMenuItems?: (e: any) => void;
    onRowPrepared?: (e: any) => void;
    datePicker?: boolean;
    handleDatePicker?: (dates: any, dateStrings: [string, string]) => void;
    columnFilter?: boolean;
    renderingMode?: 'virtual' | 'standard' | undefined;
    scrollingMode?: 'virtual' | 'infinite' | 'standard' | undefined;
  }
  const CDataGrid: React.FC<CDataGridProps> = ({
    children,
    gridKey,
    data,
    refSource,
    height = '80vh',
    columns,
    handleOpenEditModal,
    handleOpenDeleteModal,
    handleOpenModal,
    handleOpenSearch,
    handleAutoSize,
    handleOpenChangePasswordModal,
    handleAssignSpa,
    handleRefresh,
    handleImport,
    handleSave,
    handleStartAllBot,
    handleStopAllBot,
    handleBackButton,
    selectedRowKeys = [],
    onSelectionChanged,
    addLogicVisible = true,
    editButtonVisible = true,
    changePasswordButtonVisible = false,
    deleteButtonVisible = true,
    startAllBotVisible = false,
    stopAllBotVisible = false,
    // columnChooserButtonVisible = true,
    toolbarVisible = true,
    searchVisible = false,
    assignSpaVisible = false,
    refreshVisible = false,
    multiselect = false,
    autoSizeVisible = false,
    linkToVisible = false,
    saveVisible = false,
    allowEditing = false,
    backButtonVisible = false,
    linkTo,
    importButtonVisible = false,
    customMenuItems,
    onRowPrepared,
    className,
    datePicker = false,
    handleDatePicker,
    columnFilter = false,
    renderingMode = 'virtual',
    scrollingMode = 'virtual',
    enableSwitchVisible = false,
    handleEnable,
    handleUploadModal,
  }) => {
    const { RangePicker } = DatePicker;
    const { t } = useTranslation();
  
    return (
      <>
        <DataGrid
          ref={refSource}
          cacheEnabled={false}
          dataSource={data}
          repaintChangesOnly={true}
          showBorders={true}
          showRowLines={true}
          rowAlternationEnabled={true}
          height={height}
          style={{ overflow: 'auto' }}
          allowColumnResizing={true}
          onContextMenuPreparing={customMenuItems}
          onRowPrepared={onRowPrepared}
          className={className}
          selectedRowKeys={selectedRowKeys}
          onSelectionChanged={onSelectionChanged}>
          {multiselect && <Selection mode='multiple' selectAllMode={'allPages'} showCheckBoxesMode={'always'} selectByClick={true} />}
          {allowEditing && <Editing mode='cell' allowDeleting={false} allowUpdating={true} startEditAction='dblClick' />}
          <FilterRow visible={columnFilter} />
          {columns?.map((column) => (
            <Column
              defaultSortOrder={column.dataField == 'id' ? 'asc' : undefined}
              dataType={column.dataType}
              alignment={column.addition?.alignment ? column.addition.alignment : 'left'}
              key={column.dataField}
              dataField={column.dataField}
              caption={t(column.caption)}
              {...column.addition}
              {...(column.addition && column.addition.minWidth ? column.addition.minWidth : { minWidth: 50 })}
              cellRender={column.cellRender && column.cellRender}
            />
          ))}
          {enableSwitchVisible && (
            <Column
              cellRender={(cellData) => (
                <Switch
                  className={cellData.data.enabled ? `${styles['c-datagrid__enabledButton']} ${styles['on']}` : `${styles['c-datagrid__enabledButton']} ${styles['off']}`}
                  checked={cellData.data.enabled}
                  onChange={() => handleEnable && handleEnable(cellData?.row?.data)}
                  value={cellData.data.enabled}
                />
              )}
              alignment='center'
              caption={t('activate')}
              minWidth={75}
              allowHiding={false}
            />
          )}
          {(editButtonVisible || deleteButtonVisible || handleOpenChangePasswordModal) && (
            <Column
              alignment='center'
              caption={t('actions')}
              type={'buttons'}
              minWidth={75}
              allowHiding={false}
              buttons={[
                {
                  text: t('edit'),
                  icon: 'edit',
                  onClick: function (e) {
                    handleOpenEditModal && handleOpenEditModal(e.row?.data);
                  },
                  visible: editButtonVisible,
                },
                {
                  text: t('save'),
                  icon: 'save',
                  onClick: function (e) {
                    handleSave && handleSave(e.row?.data);
                  },
                  visible: saveVisible,
                },
                {
                  text: t('assign'),
                  icon: 'redo',
                  onClick: function (e) {
                    handleAssignSpa && handleAssignSpa(e.row?.data);
                  },
                  visible: assignSpaVisible,
                },
                {
                  text: t('delete'),
                  icon: 'trash',
                  onClick: function (e) {
                    handleOpenDeleteModal && handleOpenDeleteModal(e.row?.data);
                  },
                  visible: deleteButtonVisible,
                },
                {
                  text: t('lock'),
                  icon: 'lock',
                  onClick: function (e) {
                    handleOpenChangePasswordModal && handleOpenChangePasswordModal(e.row?.data);
                  },
                  visible: changePasswordButtonVisible,
                },
                {
                  text: t('go_to'),
                  icon: 'chevrondoubleright',
                  onClick: function (e) {
                    linkTo && linkTo(e.row?.data);
                  },
                  visible: linkToVisible,
                },
              ]}
            />
          )}
  
          <Paging enabled={false} />
          <Scrolling rowRenderingMode={renderingMode} columnRenderingMode={renderingMode} mode={scrollingMode} />
          <LoadPanel enabled={false} />
          {/* <ColumnChooser enabled={columnChooserButtonVisible} mode={"select"}>
            <Position
              my="right top"
              at="right bottom"
              of=".dx-datagrid-column-chooser-button"
            />
          </ColumnChooser> */}
          <Toolbar visible={toolbarVisible}>
            {datePicker && (
              <Item location='after'>
                <RangePicker
                  disabledDate={(current: any) => current && current > dayjs().endOf('day')}
                  defaultValue={[dayjs().subtract(1, 'hour').utc(), dayjs().utc()]}
                  showTime={true}
                  format='YYYY-MM-DD HH:mm:ss'
                  clearIcon={false}
                  onChange={(dates, dateStrings) => {
                    handleDatePicker && handleDatePicker(dates, dateStrings);
                  }}
                />
              </Item>
            )}
            {handleUploadModal && (
              <Item location='after'>
                <ButtonIcon title='upload' icon={<UploadOutlined />} handleClick={handleUploadModal} />
              </Item>
            )}
            {importButtonVisible && (
              <Item location='after'>
                <ButtonIcon title='import' icon={<LuRefresh />} handleClick={handleImport} />
              </Item>
            )}
            {startAllBotVisible && (
              <Item location='after'>
                <ButtonIcon title='start_all' icon={<FaCirclePlay />} handleClick={handleStartAllBot} />
              </Item>
            )}
            {stopAllBotVisible && (
              <Item location='after'>
                <ButtonIcon title='stop_all' icon={<FaCirclePause />} handleClick={handleStopAllBot} />
              </Item>
            )}
            {autoSizeVisible && (
              <Item>
                <ButtonIcon title='auto_size' icon={<IoMdResize />} handleClick={handleAutoSize} />
              </Item>
            )}
            {refreshVisible && (
              <Item location='after'>
                <ButtonIcon title='refresh' icon={<ReloadOutlined />} handleClick={handleRefresh} />
              </Item>
            )}
            {backButtonVisible && (
              <Item location='after'>
                <ButtonIcon title='refresh' icon={<ArrowGoBack />} handleClick={handleBackButton} />
              </Item>
            )}
            {searchVisible && (
              <Item>
                <ButtonIcon title='search' icon={<SearchOutlined />} handleClick={handleOpenSearch} />
              </Item>
            )}
            {addLogicVisible && (
              <Item location='after'>
                <ButtonIcon title='add' icon={<PlusOutlined />} handleClick={handleOpenModal} />
              </Item>
            )}
            <Item name='columnChooserButton' />
          </Toolbar>
          <StateStoring enabled={true} type='localStorage' storageKey={'storage-' + gridKey} />
          {children}
        </DataGrid>
      </>
    );
  };
  export default CDataGrid;
  