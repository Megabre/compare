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

    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Tabler.io CSS -->
    <link href="https://cdn.jsdelivr.net/npm/@tabler/core@latest/dist/css/tabler.min.css" rel="stylesheet">
    
    <!-- Summernote CSS -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
    
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    
    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    
    <!-- Summernote JS -->
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.js"></script>
    
    <!-- Language System -->
    <script src="language.js"></script>
</head>
<body>
    <div class="header">
        <h1 class="title">Megabre Compare -> <a href="https://github.com/Megabre/compare" target="_blank" class="github-link" title="GitHub'da Görüntüle"><i class="fab fa-github"></i> GitHub</a></h1>
        <button id="toggleMode" class="mode-toggle">Dark Mode</button>
    </div>

<div class="text-inputs">
        <div class="input-container">
            <div class="editor-controls">
                <button type="button" class="btn btn-sm btn-info toggle-editor" data-target="input1" title="Editörü Aç/Kapat">
                    <i class="fas fa-edit"></i> <span class="editor-toggle-text">Editörü Aç</span>
                </button>
            </div>
            <div id="summernote1" style="display: none;"></div>
            <textarea id="input1" placeholder="İlk metni giriniz"></textarea>
            <div class="function-buttons">
                <button class="btn btn-sm btn-default" onclick="clearText('input1')">Temizle</button>
                <button class="btn btn-sm btn-default" onclick="convertToLower('input1')">Küçük Harfe Çevir</button>
                <button class="btn btn-sm btn-default" onclick="removeSpaces('input1')">Boşlukları Temizle</button>
            </div>
        </div>
        <div class="input-container">
            <div class="editor-controls">
                <button type="button" class="btn btn-sm btn-info toggle-editor" data-target="input2" title="Editörü Aç/Kapat">
                    <i class="fas fa-edit"></i> <span class="editor-toggle-text">Editörü Aç</span>
                </button>
            </div>
            <div id="summernote2" style="display: none;"></div>
            <textarea id="input2" placeholder="Karşılaştırılacak metni giriniz"></textarea>
            <div class="function-buttons">
                <button class="btn btn-sm btn-default" onclick="clearText('input2')">Temizle</button>
                <button class="btn btn-sm btn-default" onclick="convertToLower('input2')">Küçük Harfe Çevir</button>
                <button class="btn btn-sm btn-default" onclick="removeSpaces('input2')">Boşlukları Temizle</button>
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
