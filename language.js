// Language System for Megabre Compare
// Supports: TR (Turkish), EN (English), ES (Spanish)

const translations = {
    tr: {
        // Meta
        title: "Megabre Compare - Metin Karşılaştırma Aracı",
        description: "Megabre Compare - Geliştiriciler, yazarlar ve içerik oluşturucular için güçlü metin karşılaştırma aracı. Metinleri satır satır karşılaştırın ve farkları anında bulun.",
        ogTitle: "Megabre Compare - Metin Karşılaştırma Aracı",
        ogDescription: "Geliştiriciler, yazarlar ve içerik oluşturucular için güçlü, istemci tarafı metin karşılaştırma aracı. Metinleri satır satır karşılaştırın ve farkları anında bulun.",
        
        // Header
        headerTitle: "Megabre Compare",
        infoButton: "Bilgi",
        darkMode: "Karanlık Mod",
        lightMode: "Açık Mod",
        
        // Inputs
        input1Placeholder: "İlk metni giriniz",
        input2Placeholder: "Karşılaştırılacak metni giriniz",
        clear: "Temizle",
        toLowercase: "Küçük Harfe Çevir",
        removeSpaces: "Boşlukları Temizle",
        
        // Buttons
        compare: "Karşılaştır",
        skipLine: "Satır Atla / Farkları Göster",
        showDifferences: "Sadece Farkları Göster",
        
        // Warning
        warningMessage: "Maksimum 5000 satır sınırı aşıldı. Fazla satırlar işlenmedi.",
        inputTooLong: "Girdi çok uzun! Lütfen daha kısa bir metin girin.",
        
        // Modal
        modalTitle: "Megabre Compare Hakkında",
        modalDescription: "Bu sistem, iki farklı metni satır satır karşılaştırarak farklılıkları görsel olarak vurgulamak amacıyla geliştirilmiştir. Megabre Compare, özellikle uzun ve karmaşık dokümanlarda küçük farklılıkları hızlıca bulmak için ideal bir çözümdür.",
        
        // Features
        featuresTitle: "Ana Özellikler",
        feature1: "<strong>İki metni karşılaştırma ve farkları vurgulama:</strong> Metinlerinizi satır satır karşılaştırarak hangi satırların farklı olduğunu ve hangi kelimelerde değişiklikler olduğunu görsel olarak fark edebilirsiniz. Farklı olan satırların arka planı vurgulanır ve farklı kelimeler kırmızı renkle gösterilir.",
        feature2: "<strong>\"Atla Göster\" Butonu:</strong> Bu özellik, farklı olan satırlara hızlıca atlamanızı sağlar. Sistem, tüm metinleri tarar ve farklılık bulduğu satırlara kolayca ulaşmanızı sağlar.",
        feature3: "<strong>\"Sadece Farkları Göster\" Butonu:</strong> Bu işlev, yalnızca iki metin arasında farklı olan satırları görüntüler. Tekrar tıklayarak tüm metni geri yükleyebilirsiniz.",
        feature4: "<strong>Dark/Light Mode Desteği:</strong> Sistemin görünümünü Dark Mode veya Light Mode'a çevirebilirsiniz. Kullanıcıya daha rahat bir kullanım deneyimi sunar.",
        feature5: "<strong>Metin temizleme ve düzenleme işlevleri:</strong> Sistemde ayrıca metinlerinizi temizleyebilir, küçük harfe çevirebilir ve gereksiz boşlukları kaldırabilirsiniz.",
        
        // Use Cases
        useCasesTitle: "Kullanım Alanları",
        useCasesIntro: "Megabre Compare, özellikle aşağıdaki senaryolar için idealdir:",
        useCase1: "<strong>Büyük Dokümanları Karşılaştırma:</strong> Özellikle büyük ve kompleks dokümanlar üzerinde çalışırken, iki sürüm arasındaki farkları bulmak için kullanılır.",
        useCase2: "<strong>Kod Karşılaştırması:</strong> İki farklı kod sürümü arasındaki değişiklikleri tespit edebilir, bu sayede geliştirme süreçlerinde zaman kazanabilirsiniz.",
        useCase3: "<strong>Rapor ve Belgeler:</strong> Birden fazla versiyona sahip metinlerde, hangi satırlarda değişiklikler olduğunu görüp düzenlemeleri hızlıca yapabilirsiniz.",
        
        // How to Use
        howToUseTitle: "Nasıl Kullanılır?",
        howToUseIntro: "Sistemi kullanmak oldukça basittir. İşte adım adım kullanım rehberi:",
        step1: "Karşılaştırmak istediğiniz iki metni giriş alanlarına yazın veya yapıştırın.",
        step2: "\"Karşılaştır\" butonuna tıklayın. Sistem, metinleri satır satır karşılaştırarak hangi satırların farklı olduğunu size gösterecek.",
        step3: "\"Atla Göster\" butonunu kullanarak, farklı satırlara hızlıca atlayabilirsiniz.",
        step4: "Eğer sadece farklı olan satırları görmek istiyorsanız, \"Sadece Farkları Göster\" butonuna tıklayabilirsiniz. Bu buton, sadece iki metin arasındaki farklı satırları gösterecek, tekrar tıkladığınızda tüm metin geri yüklenecektir.",
        step5: "Işığa duyarlı bir kullanım için, sağ üst köşedeki \"Dark Mode\" butonunu kullanarak görünüm modunu değiştirebilirsiniz.",
        step6: "Metinleri temizlemek, küçük harfe çevirmek veya gereksiz boşlukları kaldırmak için ilgili fonksiyon butonlarını kullanabilirsiniz.",
        
        // Technical
        technicalTitle: "Teknik Detaylar ve Güvenlik",
        technical1: "Sistem, kullanıcı dostu bir arayüzle iki metni satır satır karşılaştırmak üzerine kurulmuştur. Güvenlik açısından, kullanıcı girdileri XSS (Cross-Site Scripting) saldırılarına karşı korunmaktadır. Metinler ekrana yazdırılmadan önce özel olarak kaçış karakterleri ile temizlenir, böylece kötü niyetli kod çalıştırma girişimlerine karşı güvenlik sağlanır.",
        technical2: "Metin girişlerinde belirli sınırlamalar bulunur, kullanıcı başına maksimum 5000 satır ve yaklaşık 100.000 karakter ile sınırlıdır. Bu limitler, performans sorunlarını ve kötüye kullanımı önlemeye yardımcı olur.",
        technical3: "Sunucuya yönelik herhangi bir yük oluşturulmamakta, tüm işlemler tarayıcı üzerinde gerçekleştirilmekte ve böylece verileriniz sunuculara gönderilmeden tamamen gizli kalmaktadır.",
        
        // Conclusion
        conclusionTitle: "Sonuç",
        conclusion: "Megabre Compare, uzun metinler ve dokümanlar arasında hızlı, verimli ve güvenli bir şekilde karşılaştırma yapmak için tasarlanmıştır. Özellikle büyük dokümanlarla çalışanlar için farklılıkları bulmak ve düzenlemeleri hızlandırmak amacıyla önemli bir aracınızdır. Sistemin sunduğu kullanıcı dostu özellikler sayesinde metinler arasında hataları bulmak artık çok daha kolay ve hızlı."
    },
    
    en: {
        // Meta
        title: "Megabre Compare - Text Comparison Tool",
        description: "Megabre Compare - Powerful text comparison tool for developers, writers, and content creators. Compare texts line by line and find differences instantly.",
        ogTitle: "Megabre Compare - Text Comparison Tool",
        ogDescription: "A powerful, client-side text comparison tool for developers, writers, and content creators. Compare texts line by line and find differences instantly.",
        
        // Header
        headerTitle: "Megabre Compare",
        infoButton: "Info",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        
        // Inputs
        input1Placeholder: "Enter first text",
        input2Placeholder: "Enter text to compare",
        clear: "Clear",
        toLowercase: "Convert to Lowercase",
        removeSpaces: "Remove Spaces",
        
        // Buttons
        compare: "Compare",
        skipLine: "Skip Line / Show Differences",
        showDifferences: "Show Only Differences",
        
        // Warning
        warningMessage: "Maximum line limit of 5000 exceeded. Excess lines were not processed.",
        inputTooLong: "Input too long! Please enter a shorter text.",
        
        // Modal
        modalTitle: "About Megabre Compare",
        modalDescription: "This system is designed to compare two different texts line by line and highlight the differences visually. Megabre Compare is ideal for quickly finding small differences, especially in long and complex documents.",
        
        // Features
        featuresTitle: "Main Features",
        feature1: "<strong>Compare and highlight differences between two texts:</strong> You can visually notice which lines are different and which words have changed by comparing your texts line by line. The background of different lines is highlighted, and different words are shown in red.",
        feature2: "<strong>'Skip to Show' Button:</strong> This feature allows you to quickly jump to the different lines. The system scans all texts and allows you to easily access the lines where it finds differences.",
        feature3: "<strong>'Show Only Differences' Button:</strong> This function only displays the lines that are different between the two texts. You can reload the full text by clicking again.",
        feature4: "<strong>Dark/Light Mode Support:</strong> You can switch the system view to Dark Mode or Light Mode. It provides a more comfortable user experience.",
        feature5: "<strong>Text cleaning and editing functions:</strong> You can also clean your texts, convert them to lowercase, and remove unnecessary spaces in the system.",
        
        // Use Cases
        useCasesTitle: "Use Cases",
        useCasesIntro: "Megabre Compare is ideal for the following scenarios:",
        useCase1: "<strong>Comparing Large Documents:</strong> Used to find differences between two versions, especially when working with large and complex documents.",
        useCase2: "<strong>Code Comparison:</strong> Can detect changes between two different versions of code, saving you time during development processes.",
        useCase3: "<strong>Reports and Documents:</strong> You can quickly make changes by seeing which lines have changed in texts with multiple versions.",
        
        // How to Use
        howToUseTitle: "How to Use?",
        howToUseIntro: "Using the system is quite simple. Here is a step-by-step usage guide:",
        step1: "Enter or paste the two texts you want to compare into the input fields.",
        step2: "Click the 'Compare' button. The system will compare the texts line by line and show you which lines are different.",
        step3: "Use the 'Skip to Show' button to quickly jump to different lines.",
        step4: "If you only want to see the different lines, click the 'Show Only Differences' button. This button will only show the different lines between the two texts. Clicking again will reload the full text.",
        step5: "For a light-sensitive usage, change the view mode using the 'Dark Mode' button at the top right corner.",
        step6: "Use the function buttons to clear texts, convert to lowercase, or remove unnecessary spaces.",
        
        // Technical
        technicalTitle: "Technical Details and Security",
        technical1: "The system is built to compare two texts line by line with a user-friendly interface. In terms of security, user inputs are protected against XSS (Cross-Site Scripting) attacks. Texts are specially cleaned with escape characters before being displayed on the screen, thus ensuring security against malicious code execution attempts.",
        technical2: "There are certain limitations in text inputs, limited to a maximum of 5000 lines and approximately 100,000 characters per user. These limits help prevent performance issues and abuse.",
        technical3: "No load is created on the server, all operations are performed on the browser, and thus your data remains completely private without being sent to servers.",
        
        // Conclusion
        conclusionTitle: "Conclusion",
        conclusion: "Megabre Compare is designed to make quick, efficient, and secure comparisons between long texts and documents. It is an important tool for those working with large documents to find differences and speed up edits. Thanks to the user-friendly features offered by the system, finding errors between texts is now much easier and faster."
    },
    
    es: {
        // Meta
        title: "Megabre Compare - Herramienta de Comparación de Texto",
        description: "Megabre Compare - Herramienta poderosa de comparación de texto para desarrolladores, escritores y creadores de contenido. Compara textos línea por línea y encuentra diferencias al instante.",
        ogTitle: "Megabre Compare - Herramienta de Comparación de Texto",
        ogDescription: "Una herramienta poderosa de comparación de texto del lado del cliente para desarrolladores, escritores y creadores de contenido. Compara textos línea por línea y encuentra diferencias al instante.",
        
        // Header
        headerTitle: "Megabre Compare",
        infoButton: "Info",
        darkMode: "Modo Oscuro",
        lightMode: "Modo Claro",
        
        // Inputs
        input1Placeholder: "Ingrese el primer texto",
        input2Placeholder: "Ingrese el texto a comparar",
        clear: "Limpiar",
        toLowercase: "Convertir a Minúsculas",
        removeSpaces: "Eliminar Espacios",
        
        // Buttons
        compare: "Comparar",
        skipLine: "Saltar Línea / Mostrar Diferencias",
        showDifferences: "Mostrar Solo Diferencias",
        
        // Warning
        warningMessage: "Se excedió el límite máximo de 5000 líneas. Las líneas excedentes no se procesaron.",
        inputTooLong: "¡La entrada es demasiado larga! Por favor ingrese un texto más corto.",
        
        // Modal
        modalTitle: "Acerca de Megabre Compare",
        modalDescription: "Este sistema está diseñado para comparar dos textos diferentes línea por línea y resaltar las diferencias visualmente. Megabre Compare es ideal para encontrar rápidamente pequeñas diferencias, especialmente en documentos largos y complejos.",
        
        // Features
        featuresTitle: "Características Principales",
        feature1: "<strong>Comparar y resaltar diferencias entre dos textos:</strong> Puede notar visualmente qué líneas son diferentes y qué palabras han cambiado comparando sus textos línea por línea. El fondo de las líneas diferentes se resalta y las palabras diferentes se muestran en rojo.",
        feature2: "<strong>Botón 'Saltar para Mostrar':</strong> Esta característica le permite saltar rápidamente a las líneas diferentes. El sistema escanea todos los textos y le permite acceder fácilmente a las líneas donde encuentra diferencias.",
        feature3: "<strong>Botón 'Mostrar Solo Diferencias':</strong> Esta función solo muestra las líneas que son diferentes entre los dos textos. Puede recargar el texto completo haciendo clic nuevamente.",
        feature4: "<strong>Soporte de Modo Oscuro/Claro:</strong> Puede cambiar la vista del sistema a Modo Oscuro o Modo Claro. Proporciona una experiencia de usuario más cómoda.",
        feature5: "<strong>Funciones de limpieza y edición de texto:</strong> También puede limpiar sus textos, convertirlos a minúsculas y eliminar espacios innecesarios en el sistema.",
        
        // Use Cases
        useCasesTitle: "Casos de Uso",
        useCasesIntro: "Megabre Compare es ideal para los siguientes escenarios:",
        useCase1: "<strong>Comparar Documentos Grandes:</strong> Se usa para encontrar diferencias entre dos versiones, especialmente cuando se trabaja con documentos grandes y complejos.",
        useCase2: "<strong>Comparación de Código:</strong> Puede detectar cambios entre dos versiones diferentes de código, ahorrándole tiempo durante los procesos de desarrollo.",
        useCase3: "<strong>Informes y Documentos:</strong> Puede hacer cambios rápidamente viendo qué líneas han cambiado en textos con múltiples versiones.",
        
        // How to Use
        howToUseTitle: "¿Cómo Usar?",
        howToUseIntro: "Usar el sistema es bastante simple. Aquí está una guía de uso paso a paso:",
        step1: "Ingrese o pegue los dos textos que desea comparar en los campos de entrada.",
        step2: "Haga clic en el botón 'Comparar'. El sistema comparará los textos línea por línea y le mostrará qué líneas son diferentes.",
        step3: "Use el botón 'Saltar para Mostrar' para saltar rápidamente a líneas diferentes.",
        step4: "Si solo desea ver las líneas diferentes, haga clic en el botón 'Mostrar Solo Diferencias'. Este botón solo mostrará las líneas diferentes entre los dos textos. Al hacer clic nuevamente, se recargará el texto completo.",
        step5: "Para un uso sensible a la luz, cambie el modo de vista usando el botón 'Modo Oscuro' en la esquina superior derecha.",
        step6: "Use los botones de función para limpiar textos, convertirlos a minúsculas o eliminar espacios innecesarios.",
        
        // Technical
        technicalTitle: "Detalles Técnicos y Seguridad",
        technical1: "El sistema está construido para comparar dos textos línea por línea con una interfaz amigable. En términos de seguridad, las entradas del usuario están protegidas contra ataques XSS (Cross-Site Scripting). Los textos se limpian especialmente con caracteres de escape antes de mostrarse en la pantalla, asegurando así la seguridad contra intentos de ejecución de código malicioso.",
        technical2: "Hay ciertas limitaciones en las entradas de texto, limitadas a un máximo de 5000 líneas y aproximadamente 100,000 caracteres por usuario. Estos límites ayudan a prevenir problemas de rendimiento y abuso.",
        technical3: "No se crea carga en el servidor, todas las operaciones se realizan en el navegador, y así sus datos permanecen completamente privados sin ser enviados a servidores.",
        
        // Conclusion
        conclusionTitle: "Conclusión",
        conclusion: "Megabre Compare está diseñado para hacer comparaciones rápidas, eficientes y seguras entre textos largos y documentos. Es una herramienta importante para aquellos que trabajan con documentos grandes para encontrar diferencias y acelerar las ediciones. Gracias a las características amigables ofrecidas por el sistema, encontrar errores entre textos es ahora mucho más fácil y rápido."
    }
};

// Get current language from localStorage or detect from browser
function getCurrentLanguage() {
    const savedLang = localStorage.getItem('megabreCompareLang');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.substring(0, 2).toLowerCase();
    
    if (langCode === 'tr') return 'tr';
    if (langCode === 'es') return 'es';
    return 'en'; // Default to English
}

// Set language and save to localStorage
function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem('megabreCompareLang', lang);
    applyLanguage(lang);
}

// Apply language translations
function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update meta tags
    document.title = t.title;
    document.querySelector('meta[name="description"]').setAttribute('content', t.description);
    document.querySelector('meta[property="og:title"]').setAttribute('content', t.ogTitle);
    document.querySelector('meta[property="og:description"]').setAttribute('content', t.ogDescription);
    
    // Update header
    const titleElement = document.querySelector(".title");
    if (titleElement) {
        titleElement.innerHTML = `${t.headerTitle} -> <button id='infoButton' class='info-button'>${t.infoButton}</button>`;
    }
    
    // Mode button will be updated by updateModeButtonText() function in app.js
    
    // Update inputs
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    if (input1) input1.placeholder = t.input1Placeholder;
    if (input2) input2.placeholder = t.input2Placeholder;
    
    // Update function buttons
    const clearButtons = document.querySelectorAll('.function-buttons button');
    if (clearButtons.length >= 6) {
        clearButtons[0].innerText = t.clear;
        clearButtons[1].innerText = t.toLowercase;
        clearButtons[2].innerText = t.removeSpaces;
        clearButtons[3].innerText = t.clear;
        clearButtons[4].innerText = t.toLowercase;
        clearButtons[5].innerText = t.removeSpaces;
    }
    
    // Update main buttons
    const compareButton = document.getElementById("compareBtn");
    if (compareButton) compareButton.innerText = t.compare;
    
    const skipButton = document.getElementById("skipButton");
    if (skipButton) skipButton.innerText = t.skipLine;
    
    const showDifferencesButton = document.getElementById("showDifferencesButton");
    if (showDifferencesButton) showDifferencesButton.innerText = t.showDifferences;
    
    // Update warning message
    const warningMessage = document.getElementById("warningMessage");
    if (warningMessage) warningMessage.innerText = t.warningMessage;
    
    // Update modal content
    const modalTitle = document.querySelector(".modal-content h2");
    if (modalTitle) modalTitle.innerText = t.modalTitle;
    
    const modalParagraph = document.querySelector(".modal-content p");
    if (modalParagraph) modalParagraph.innerText = t.modalDescription;
    
    const headings = document.querySelectorAll(".modal-content h3");
    if (headings.length >= 5) {
        headings[0].innerText = t.featuresTitle;
        headings[1].innerText = t.useCasesTitle;
        headings[2].innerText = t.howToUseTitle;
        headings[3].innerText = t.technicalTitle;
        headings[4].innerText = t.conclusionTitle;
    }
    
    // Update features list
    const features = document.querySelectorAll(".modal-content ul")[0]?.children;
    if (features && features.length >= 5) {
        features[0].innerHTML = t.feature1;
        features[1].innerHTML = t.feature2;
        features[2].innerHTML = t.feature3;
        features[3].innerHTML = t.feature4;
        features[4].innerHTML = t.feature5;
    }
    
    // Update use cases
    const useCasesParagraph = document.querySelectorAll(".modal-content p")[1];
    if (useCasesParagraph) useCasesParagraph.innerText = t.useCasesIntro;
    
    const useCases = document.querySelectorAll(".modal-content ul")[1]?.children;
    if (useCases && useCases.length >= 3) {
        useCases[0].innerHTML = t.useCase1;
        useCases[1].innerHTML = t.useCase2;
        useCases[2].innerHTML = t.useCase3;
    }
    
    // Update how to use
    const howToUseParagraph = document.querySelectorAll(".modal-content p")[2];
    if (howToUseParagraph) howToUseParagraph.innerText = t.howToUseIntro;
    
    const howToUse = document.querySelectorAll(".modal-content ol")[0]?.children;
    if (howToUse && howToUse.length >= 6) {
        howToUse[0].innerText = t.step1;
        howToUse[1].innerText = t.step2;
        howToUse[2].innerText = t.step3;
        howToUse[3].innerText = t.step4;
        howToUse[4].innerText = t.step5;
        howToUse[5].innerText = t.step6;
    }
    
    // Update technical details
    const technicalParagraphs = document.querySelectorAll(".modal-content p");
    if (technicalParagraphs.length >= 6) {
        technicalParagraphs[3].innerText = t.technical1;
        technicalParagraphs[4].innerText = t.technical2;
        technicalParagraphs[5].innerText = t.technical3;
    }
    
    // Update conclusion
    const conclusionParagraph = document.querySelectorAll(".modal-content p")[6];
    if (conclusionParagraph) conclusionParagraph.innerText = t.conclusion;
    
    // Update language dropdown active state
    updateLanguageDropdown(lang);
    
    // Update dark mode button text
    if (typeof updateModeButtonText === 'function') {
        updateModeButtonText();
    }
}

// Update language dropdown active state
function updateLanguageDropdown(lang) {
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
    });
    const activeOption = document.querySelector(`[data-lang="${lang}"]`);
    if (activeOption) {
        activeOption.classList.add('active');
    }
    
    // Update flag image
    const flagImg = document.querySelector('.language-dropdown-btn img');
    if (flagImg) {
        flagImg.src = `../img/flags/${lang}.svg`;
        flagImg.alt = lang === 'tr' ? 'Türkçe' : (lang === 'en' ? 'English' : 'Español');
    }
}

// Toggle language dropdown
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    const button = document.querySelector('.language-dropdown-btn');
    if (dropdown && button) {
        dropdown.classList.toggle('show');
        button.classList.toggle('active');
    }
}

// Change language
function changeLanguage(lang) {
    setLanguage(lang);
    toggleLanguageDropdown();
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('languageDropdown');
    const button = document.querySelector('.language-dropdown-btn');
    if (dropdown && button && !dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    applyLanguage(currentLang);
});

