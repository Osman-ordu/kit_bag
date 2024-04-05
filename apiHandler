import axios from 'axios';

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    const responseCode = err.response.status;
    const dataMessage = err.response.data.message;

    switch (err.response.status) {
      case 401:
        // 401 Unauthorized - İzinsiz: Bu kaynağa erişim izniniz yok.
        console.log(dataMessage ?? `${responseCode}: Unauthorized.`);
        break;
      case 402:
        // 402 Payment Required - Ödeme Gerekli: Bu hizmeti kullanmak için ödeme yapmalısınız.
        console.log(dataMessage ?? `${responseCode}: Payment Required.`);
        break;
      case 403:
        // 403 Forbidden - Yasak: Bu kaynağa erişim izniniz yok.
        console.log(dataMessage ?? `${responseCode}: Forbidden.`);
        break;
      case 404:
        // 404 Not Found - Bulunamadı: İstenen kaynak bulunamadı.
        console.log(dataMessage ?? `${responseCode}: Not Found.`);
        break;
      case 405:
        // 405 Method Not Allowed - İzin Verilmeyen Metot: Bu kaynağa bu HTTP metodu ile erişim izniniz yok.
        console.log(dataMessage ?? `${responseCode}: Method Not Allowed.`);
        break;
      case 406:
        // 406 Not Acceptable - Kabul Edilemez: Sunucu, istemci tarafından kabul edilebilecek bir yanıt oluşturamadı.
        console.log(dataMessage ?? `${responseCode}: Not Acceptable.`);
        break;
      case 407:
        // 407 Proxy Authentication Required - Proxy Kimlik Doğrulaması Gerekli: İstek, özel bir proxy tarafından kimlik doğrulaması gerektiriyor.
        console.log(dataMessage ?? `${responseCode}: Proxy Authentication Required.`);
        break;
      case 408:
        // 408 Request Timeout - İstek Zaman Aşımı: Sunucu, isteği belirli bir süre içinde tamamlayamadı.
        console.log(dataMessage ?? `${responseCode}: Request Timeout.`);
        break;
      case 409:
        // 409 Conflict - Çakışma: İstek, kaynağın mevcut durumuyla uyumsuz.
        console.log(dataMessage ?? `${responseCode}: Conflict.`);
        break;
      case 410:
        // 410 Gone - Kaybolmuş: İstenen kaynak artık sunucuda bulunmuyor.
        console.log(dataMessage ?? `${responseCode}: Gone.`);
        break;
      case 411:
        // 411 Length Required - Uzunluk Gerekli: İstek, uzunluk belirteç alanı içermiyor.
        console.log(dataMessage ?? `${responseCode}: Length Required.`);
        break;
      case 412:
        // 412 Precondition Failed - Önkoşul Başarısız: Sunucu, isteği belirtilen önkoşullara uymadı.
        console.log(dataMessage ?? `${responseCode}: Precondition Failed.`);
        break;
      case 413:
        // 413 Payload Too Large - Yük Çok Büyük: İstek, sunucunun işleyebileceği kadar büyük.
        console.log(dataMessage ?? `${responseCode}: Payload Too Large.`);
        break;
      case 414:
        // 414 URI Too Long - URI Çok Uzun: İstek URI'si sunucunun kabul edebileceğinden daha uzun.
        console.log(dataMessage ?? `${responseCode}: URI Too Long.`);
        break;
      case 415:
        // 415 Unsupported Media Type - Desteklenmeyen Medya Türü: İstekteki medya türü desteklenmiyor.
        console.log(dataMessage ?? `${responseCode}: Unsupported Media Type.`);
        break;
      case 416:
        // 416 Range Not Satisfiable - Aralık Karşılanamıyor: İstekteki aralık sunucu tarafından karşılanamıyor.
        console.log(dataMessage ?? `${responseCode}: Range Not Satisfiable.`);
        break;
      case 417:
        // 417 Expectation Failed - Beklenti Başarısız Oldu: Sunucu, Expect başlığıyla belirtilen beklentileri karşılayamadı.
        console.log(dataMessage ?? `${responseCode}: Expectation Failed.`);
        break;
      case 418:
        // 418 I'm a teapot - Ben Bir Çaydanlıkım: Sunucu bir çaydanlık olduğunu iddia ediyor.
        console.log(dataMessage ?? `${responseCode}: I'm a teapot.`);
        break;
      case 421:
        // 421 Misdirected Request - Yanlış Yönlendirilmiş İstek: Sunucu, isteği bir yanlış konuma yönlendirdi.
        console.log(dataMessage ?? `${responseCode}: Misdirected Request.`);
        break;
      case 422:
        // 422 Unprocessable Entity - İşlenemeyen Varlık: Sunucu, isteği işleyemedi.
        console.log(dataMessage ?? `${responseCode}: Unprocessable Entity.`);
        break;
      case 423:
        // 423 Locked - Kilitli: Kaynak, işlem yapılamayacak şekilde kilitlenmiş durumda.
        console.log(dataMessage ?? `${responseCode}: Locked`);
        break;
      case 424:
        // 424 Failed Dependency - Başarısız Bağımlılık: İstek, sunucunun bağımlı olduğu başka bir isteği başlatamıyor.
        console.log(dataMessage ?? `${responseCode}: Failed Dependency`);
        break;
      case 425:
        // 425 Too Early - Çok Erken: Sunucu, isteği henüz işlemek için hazır değil.
        console.log(dataMessage ?? `${responseCode}: Too Early`);
        break;
      case 426:
        // 426 Upgrade Required - Yükseltme Gerekli: İstemci, güncelleme yapması gereken bir protokol sürümü kullanıyor.
        console.log(dataMessage ?? `${responseCode}: Upgrade Required`);
        break;
      case 428:
        // 428 Precondition Required - Önkoşul Gerekli: Sunucu, isteğin devam etmesi için önkoşulları karşılamıyor.
        console.log(dataMessage ?? `${responseCode}: Precondition Required`);
        break;
      case 429:
        // 429 Too Many Requests - Çok Fazla İstek: Kullanıcı, belirli bir süre içinde çok sayıda istek gönderdi.
        console.log(dataMessage ?? `${responseCode}: Too Many Requests`);
        break;
      case 431:
        // 431 Request Header Fields Too Large - İstek Başlık Alanları Çok Büyük: İstek başlıkları sunucunun kabul edebileceğinden daha büyük.
        console.log(dataMessage ?? `${responseCode}: Request Header Fields Too Large`);
        break;
      case 451:
        // 451 Unavailable For Legal Reasons - Yasal Nedenlerle Kullanılamaz: Sunucu, yasal nedenlerle kaynağa erişimi reddediyor.
        console.log(dataMessage ?? `${responseCode}: Unavailable For Legal Reasons`);
        break;
      case 500:
        // 500 İç Sunucu Hatası
        console.log(dataMessage ?? `${responseCode}: Internal Server Error`);
        break;
      case 501:
        // 501 Uygulanmadı
        console.log(dataMessage ?? `${responseCode}: Not Implemented`);
        break;
      case 502:
        // 502 Hatalı Ağ Geçidi
        console.log(dataMessage ?? `${responseCode}: Bad Gateway`);
        break;
      case 503:
        // 503 Servis Kullanılamıyor
        console.log(dataMessage ?? `${responseCode}: Service Unavailable`);
        break;
      case 504:
        // 503 Ağ Geçidi Zaman Aşımı
        console.log(dataMessage ?? `${responseCode}: Gateway Timeout`);
        break;
      case 505:
        // 505 Desteklenmeyen HTTP Sürümü
        console.log(dataMessage ?? `${responseCode}: HTTP Version Not Supported`);
        break;
      case 506:
        // 506 Değişken de Anlaşılıyor
        console.log(dataMessage ?? `${responseCode}: Variant Also Negotiates`);
        break;
      case 507:
        // 507 Yetersiz Depolama
        console.log(dataMessage ?? `${responseCode}: Insufficient Storage`);
        break;
      case 508:
        // 508 Döngü Tespit Edildi
        console.log(dataMessage ?? `${responseCode}: Loop Detected`);
        break;
      case 510:
        // 510 Uzatılmadı
        console.log(dataMessage ?? `${responseCode}: Not Extended`);
        break;
      case 511:
        // 511 Ağ Kimlik Doğrulama Gerekiyor
        console.log(dataMessage ?? `${responseCode}: Network Authentication Required`);
        break;
      case 520:
        // 520 Bilinmeyen Hata
        console.log(dataMessage ?? `${responseCode}: Unknown Error`);
        break;
      case 521:
        // 521 Web Sunucusu Devre Dışı
        console.log(dataMessage ?? `${responseCode}: Web Server Is Down`);
        break;
      case 522:
        // 522 Bağlantı Zaman Aşımına Uğradı
        console.log(dataMessage ?? `${responseCode}: Connection Timed Out`);
        break;
      case 523:
        // 523 Köken Ulaşılamıyor
        console.log(dataMessage ?? `${responseCode}: Origin Is Unreachable`);
        break;
      default:
        console.log('An unknown error occurred.');
        break;
    }
    throw err;
  }
);

export const CallApi = async ({ method, url, data }) => {
  const token = localStorage.getItem('token');
  const request = await axios({
    method: method,
    url: `${apiEnvUrl}${url}`,
    data: data ?? {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      toastSuccess(response.statusText && response.statusText !== '' ? response.statusText : "Connection Successful");
      return response.data;
    })
    .catch((error) => {
      toastError(error.response.data.message ? error.response.data.message : error.message && error.message !== '' ? error.message : 'Connection Unsuccessful');
    });

  return request;
};
