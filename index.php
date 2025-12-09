<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Megabre Compare - Text Comparison Tool</title>
    <meta name="description" content="Megabre Compare - Powerful text comparison tool for developers, writers, and content creators. Compare texts line by line and find differences instantly.">
    <link rel="canonical" href="https://www.megabre.com/">
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Megabre Compare - Text Comparison Tool">
    <meta property="og:description" content="A powerful, client-side text comparison tool for developers, writers, and content creators. Compare texts line by line and find differences instantly.">
    <meta property="og:url" content="https://www.megabre.com/">
    <meta property="og:site_name" content="Megabre">
    <meta property="article:published_time" content="2024-09-20T08:45:55+00:00">
    <meta property="article:modified_time" content="2024-09-20T09:17:58+00:00">
    <meta property="og:image" content="https://alicomez.com/">
    <meta property="og:image:width" content="728">
    <meta property="og:image:height" content="380">
    <meta property="og:image:type" content="image/webp">
    <meta name="author" content="Megabre">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:label1" content="Author:">
    <meta name="twitter:data1" content="Megabre">
    <meta name="twitter:label2" content="Tahmini okuma süresi">
    <meta name="twitter:data2" content="14 dakika">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="language.js"></script>
</head>
<body>
    <div class="header">
        <h1 class="title">Megabre Compare -> <button id="infoButton" class="info-button">Info</button></h1>
        <button id="toggleMode" class="mode-toggle">Dark Mode</button>
    </div>

    <!-- Modal -->
    <div id="infoModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Megabre Compare Hakkında</h2>
            <p>
                Bu sistem, iki farklı metni satır satır karşılaştırarak farklılıkları görsel olarak vurgulamak amacıyla geliştirilmiştir. Megabre Compare, özellikle uzun ve karmaşık dokümanlarda küçük farklılıkları hızlıca bulmak için ideal bir çözümdür.
            </p>
            <h3>Ana Özellikler</h3>
            <ul>
                <li><strong>İki metni karşılaştırma ve farkları vurgulama:</strong> Metinlerinizi satır satır karşılaştırarak hangi satırların farklı olduğunu ve hangi kelimelerde değişiklikler olduğunu görsel olarak fark edebilirsiniz. Farklı olan satırların arka planı vurgulanır ve farklı kelimeler kırmızı renkle gösterilir.</li>
                <li><strong>"Atla Göster" Butonu:</strong> Bu özellik, farklı olan satırlara hızlıca atlamanızı sağlar. Sistem, tüm metinleri tarar ve farklılık bulduğu satırlara kolayca ulaşmanızı sağlar.</li>
                <li><strong>"Sadece Farkları Göster" Butonu:</strong> Bu işlev, yalnızca iki metin arasında farklı olan satırları görüntüler. Tekrar tıklayarak tüm metni geri yükleyebilirsiniz.</li>
                <li><strong>Dark/Light Mode Desteği:</strong> Sistemin görünümünü Dark Mode veya Light Mode'a çevirebilirsiniz. Kullanıcıya daha rahat bir kullanım deneyimi sunar.</li>
                <li><strong>Metin temizleme ve düzenleme işlevleri:</strong> Sistemde ayrıca metinlerinizi temizleyebilir, küçük harfe çevirebilir ve gereksiz boşlukları kaldırabilirsiniz.</li>
            </ul>

            <h3>Kullanım Alanları</h3>
            <p>
                Megabre Compare, özellikle aşağıdaki senaryolar için idealdir:
            </p>
            <ul>
                <li><strong>Büyük Dokümanları Karşılaştırma:</strong> Özellikle büyük ve kompleks dokümanlar üzerinde çalışırken, iki sürüm arasındaki farkları bulmak için kullanılır.</li>
                <li><strong>Kod Karşılaştırması:</strong> İki farklı kod sürümü arasındaki değişiklikleri tespit edebilir, bu sayede geliştirme süreçlerinde zaman kazanabilirsiniz.</li>
                <li><strong>Rapor ve Belgeler:</strong> Birden fazla versiyona sahip metinlerde, hangi satırlarda değişiklikler olduğunu görüp düzenlemeleri hızlıca yapabilirsiniz.</li>
            </ul>

            <h3>Nasıl Kullanılır?</h3>
            <p>
                Sistemi kullanmak oldukça basittir. İşte adım adım kullanım rehberi:
            </p>
            <ol>
                <li>Karşılaştırmak istediğiniz iki metni giriş alanlarına yazın veya yapıştırın.</li>
                <li>"Karşılaştır" butonuna tıklayın. Sistem, metinleri satır satır karşılaştırarak hangi satırların farklı olduğunu size gösterecek.</li>
                <li>"Atla Göster" butonunu kullanarak, farklı satırlara hızlıca atlayabilirsiniz.</li>
                <li>Eğer sadece farklı olan satırları görmek istiyorsanız, "Sadece Farkları Göster" butonuna tıklayabilirsiniz. Bu buton, sadece iki metin arasındaki farklı satırları gösterecek, tekrar tıkladığınızda tüm metin geri yüklenecektir.</li>
                <li>Işığa duyarlı bir kullanım için, sağ üst köşedeki "Dark Mode" butonunu kullanarak görünüm modunu değiştirebilirsiniz.</li>
                <li>Metinleri temizlemek, küçük harfe çevirmek veya gereksiz boşlukları kaldırmak için ilgili fonksiyon butonlarını kullanabilirsiniz.</li>
            </ol>

            <h3>Teknik Detaylar ve Güvenlik</h3>
            <p>
                Sistem, kullanıcı dostu bir arayüzle iki metni satır satır karşılaştırmak üzerine kurulmuştur. Güvenlik açısından, kullanıcı girdileri XSS (Cross-Site Scripting) saldırılarına karşı korunmaktadır. Metinler ekrana yazdırılmadan önce özel olarak kaçış karakterleri ile temizlenir, böylece kötü niyetli kod çalıştırma girişimlerine karşı güvenlik sağlanır.
            </p>
            <p>
                Metin girişlerinde belirli sınırlamalar bulunur, kullanıcı başına maksimum 5000 satır ve yaklaşık 100.000 karakter ile sınırlıdır. Bu limitler, performans sorunlarını ve kötüye kullanımı önlemeye yardımcı olur.
            </p>
            <p>
                Sunucuya yönelik herhangi bir yük oluşturulmamakta, tüm işlemler tarayıcı üzerinde gerçekleştirilmekte ve böylece verileriniz sunuculara gönderilmeden tamamen gizli kalmaktadır.
            </p>

            <h3>Sonuç</h3>
            <p>
                Megabre Compare, uzun metinler ve dokümanlar arasında hızlı, verimli ve güvenli bir şekilde karşılaştırma yapmak için tasarlanmıştır. Özellikle büyük dokümanlarla çalışanlar için farklılıkları bulmak ve düzenlemeleri hızlandırmak amacıyla önemli bir aracınızdır. Sistemin sunduğu kullanıcı dostu özellikler sayesinde metinler arasında hataları bulmak artık çok daha kolay ve hızlı.
            </p>

        </div>
    </div>

<div class="text-inputs">
        <div class="input-container">
            <textarea id="input1" placeholder="İlk metni giriniz"></textarea>
            <div class="function-buttons">
                <button onclick="clearText('input1')">Temizle</button>
                <button onclick="convertToLower('input1')">Küçük Harfe Çevir</button>
                <button onclick="removeSpaces('input1')">Boşlukları Temizle</button>
            </div>
        </div>
        <div class="input-container">
            <textarea id="input2" placeholder="Karşılaştırılacak metni giriniz"></textarea>
            <div class="function-buttons">
                <button onclick="clearText('input2')">Temizle</button>
                <button onclick="convertToLower('input2')">Küçük Harfe Çevir</button>
                <button onclick="removeSpaces('input2')">Boşlukları Temizle</button>
            </div>
        </div>
    </div>

    <button id="compareBtn" class="compare-button">Karşılaştır</button>

    <!-- Yeni Atla Göster Butonu -->
    <div id="result-controls" style="display: none;" align="center">
        <button id="skipButton" class="function-button">Satır Atla / Farkları Göster</button>
        <button id="showDifferencesButton" class="function-button">Sadece Farkları Göster</button>
    </div>

    <div class="result-area" id="resultArea" style="display: none;">
        <pre id="result1" class="result-output"></pre>
        <pre id="result2" class="result-output"></pre>
    </div>

    <div id="warningMessage" style="display: none; color: red;">Maksimum 5000 satır sınırı aşıldı. Fazla satırlar işlenmedi.</div>

    <!-- Floating Language Dropdown -->
    <div class="floating-language">
        <div class="language-dropdown">
            <button class="language-dropdown-btn" onclick="toggleLanguageDropdown()" title="Dil Seçimi">
                <img src="../img/flags/tr.svg" alt="Türkçe" id="currentFlag">
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="language-dropdown-menu" id="languageDropdown">
                <a href="#" onclick="changeLanguage('tr'); return false;" data-lang="tr" class="language-option active">
                    <img src="../img/flags/tr.svg" alt="Türkçe">
                    <span>Türkçe</span>
                </a>
                <a href="#" onclick="changeLanguage('en'); return false;" data-lang="en" class="language-option">
                    <img src="../img/flags/en.svg" alt="English">
                    <span>English</span>
                </a>
                <a href="#" onclick="changeLanguage('es'); return false;" data-lang="es" class="language-option">
                    <img src="../img/flags/es.svg" alt="Español">
                    <span>Español</span>
                </a>
            </div>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>