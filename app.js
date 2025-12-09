// Karşılaştırma Butonu
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('compareBtn').addEventListener('click', function() {
        // Summernote açıksa içeriği al, değilse textarea'dan al
        let text1, text2;
        
        if (editorStates.input1) {
            const summernoteContent = $('#summernote1').summernote('code');
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = summernoteContent;
            text1 = tempDiv.textContent || tempDiv.innerText || '';
        } else {
            text1 = document.getElementById('input1').value;
        }
        
        if (editorStates.input2) {
            const summernoteContent = $('#summernote2').summernote('code');
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = summernoteContent;
            text2 = tempDiv.textContent || tempDiv.innerText || '';
        } else {
            text2 = document.getElementById('input2').value;
        }

    // Metin uzunluğunu kontrol et
    if (text1.length > 100000 || text2.length > 100000) {
        const currentLang = localStorage.getItem('megabreCompareLang') || (navigator.language || navigator.userLanguage).substring(0, 2).toLowerCase();
        let message = "Input too long! Please enter a shorter text.";
        if (currentLang === 'tr') {
            message = "Girdi çok uzun! Lütfen daha kısa bir metin girin.";
        } else if (currentLang === 'es') {
            message = "¡La entrada es demasiado larga! Por favor ingrese un texto más corto.";
        }
        alert(message);
        return;  // Bu artık bir fonksiyon içinde, sorun yaratmayacak
    }

    const lines1 = text1.split('\n').slice(0, 5000);
    const lines2 = text2.split('\n').slice(0, 5000);
    let differentLines = [];

    if (text1.split('\n').length > 5000 || text2.split('\n').length > 5000) {
        document.getElementById('warningMessage').style.display = 'block';
    } else {
        document.getElementById('warningMessage').style.display = 'none';
    }

    document.getElementById('resultArea').style.display = 'flex';

    let result1 = '';
    let result2 = '';
    for (let i = 0; i < lines1.length; i++) {
        const line1 = lines1[i] || '';
        const line2 = lines2[i] || '';

        const lineClass = line1 !== line2 ? 'different-line' : '';

        if (line1 !== line2) {
            differentLines.push(i);
        }

        result1 += `<span class="line-number">${i + 1}</span><span class="${lineClass}">${highlightDifference(line1, line2)}</span>\n`;
        result2 += `<span class="line-number">${i + 1}</span><span class="${lineClass}">${highlightDifference(line2, line1)}</span>\n`;
    }

    document.getElementById('result1').innerHTML = result1;
    document.getElementById('result2').innerHTML = result2;

        // Atla Göster Butonunu Görüntüle
        if (differentLines.length > 0) {
            document.getElementById('result-controls').style.display = 'block';
            setupSkipButton(differentLines);
        } else {
            document.getElementById('result-controls').style.display = 'none';
        }
    });
});

// Dark/Light Mode Geçişi
document.addEventListener('DOMContentLoaded', function() {
    const toggleModeBtn = document.getElementById('toggleMode');
    if (toggleModeBtn) {
        toggleModeBtn.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            updateModeButtonText();
        });
    }
});

// Update mode button text based on current language
function updateModeButtonText() {
    const currentLang = localStorage.getItem('megabreCompareLang') || (navigator.language || navigator.userLanguage).substring(0, 2).toLowerCase();
    const isLightMode = document.body.classList.contains('light-mode');
    const toggleButton = document.getElementById('toggleMode');
    
    if (!toggleButton) return;
    
    if (currentLang === 'tr') {
        toggleButton.textContent = isLightMode ? 'Açık Mod' : 'Karanlık Mod';
    } else if (currentLang === 'es') {
        toggleButton.textContent = isLightMode ? 'Modo Claro' : 'Modo Oscuro';
    } else {
        toggleButton.textContent = isLightMode ? 'Light Mode' : 'Dark Mode';
    }
}

// Make updateModeButtonText available globally for language.js
window.updateModeButtonText = updateModeButtonText;

// Temizleme, Küçük Harfe Çevirme ve Boşluk Temizleme Fonksiyonları
function clearText(id) {
    const textarea = document.getElementById(id);
    const summernoteDiv = document.getElementById('summernote' + id.slice(-1));
    
    if (editorStates[id]) {
        // Summernote açıksa
        $(summernoteDiv).summernote('code', '');
        textarea.value = '';
    } else {
        // Textarea açıksa
        textarea.value = '';
    }
}

function convertToLower(id) {
    const textarea = document.getElementById(id);
    const summernoteDiv = document.getElementById('summernote' + id.slice(-1));
    
    if (editorStates[id]) {
        // Summernote açıksa
        let content = $(summernoteDiv).summernote('code');
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        let text = tempDiv.textContent || tempDiv.innerText || '';
        text = text.toLowerCase();
        $(summernoteDiv).summernote('code', text);
        textarea.value = text;
    } else {
        // Textarea açıksa
        let text = textarea.value;
        textarea.value = text.toLowerCase();
    }
}

function removeSpaces(id) {
    const textarea = document.getElementById(id);
    const summernoteDiv = document.getElementById('summernote' + id.slice(-1));
    
    if (editorStates[id]) {
        // Summernote açıksa
        let content = $(summernoteDiv).summernote('code');
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        let text = tempDiv.textContent || tempDiv.innerText || '';
        text = text.replace(/\s+/g, ' ').trim();
        $(summernoteDiv).summernote('code', text);
        textarea.value = text;
    } else {
        // Textarea açıksa
        let text = textarea.value;
        textarea.value = text.replace(/\s+/g, ' ').trim();
    }
}

// Farklılıkları Kırmızı Renkte Gösterme
function highlightDifference(text1, text2) {
    const words1 = text1.split(' ');
    const words2 = text2.split(' ');

    return words1.map((word, index) => {
        const escapedWord = escapeHTML(word);
        return word !== words2[index] ? `<span style="color: red;">${escapedWord}</span>` : escapedWord;
    }).join(' ');
}


// Summernote Editör Yönetimi
let summernoteInstances = {
    input1: null,
    input2: null
};

let editorStates = {
    input1: false,
    input2: false
};

// Make editorStates available globally for language.js
window.editorStates = editorStates;

// Editör toggle fonksiyonu
function toggleEditor(inputId) {
    const textarea = document.getElementById(inputId);
    const summernoteDiv = document.getElementById('summernote' + inputId.slice(-1));
    const toggleBtn = document.querySelector(`[data-target="${inputId}"]`);
    const toggleText = toggleBtn.querySelector('.editor-toggle-text');
    
    if (!editorStates[inputId]) {
        // Editörü aç
        textarea.style.display = 'none';
        summernoteDiv.style.display = 'block';
        
        // Summernote'u başlat
        if (!summernoteInstances[inputId]) {
            $(summernoteDiv).summernote({
                height: 300,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline', 'clear']],
                    ['fontname', ['fontname']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['table', ['table']],
                    ['insert', ['link', 'picture', 'video']],
                    ['view', ['fullscreen', 'codeview', 'help']]
                ],
                callbacks: {
                    onChange: function(contents, $editable) {
                        // Summernote içeriğini textarea'ya aktar (HTML'den temizlenmiş)
                        const textarea = document.getElementById(inputId);
                        if (textarea) {
                            // HTML'i düz metne çevir
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = contents;
                            textarea.value = tempDiv.textContent || tempDiv.innerText || '';
                        }
                    }
                }
            });
            summernoteInstances[inputId] = true;
        }
        
        // Mevcut textarea içeriğini Summernote'a yükle
        const currentText = textarea.value;
        $(summernoteDiv).summernote('code', currentText);
        
        editorStates[inputId] = true;
        
        // Dil sisteminden metni al
        const currentLang = localStorage.getItem('megabreCompareLang') || (navigator.language || navigator.userLanguage).substring(0, 2).toLowerCase();
        if (currentLang === 'tr') {
            toggleText.textContent = 'Editörü Kapat';
        } else if (currentLang === 'es') {
            toggleText.textContent = 'Cerrar Editor';
        } else {
            toggleText.textContent = 'Close Editor';
        }
        
        toggleBtn.classList.remove('btn-info');
        toggleBtn.classList.add('btn-warning');
    } else {
        // Editörü kapat
        const summernoteContent = $(summernoteDiv).summernote('code');
        
        // HTML'i düz metne çevir
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = summernoteContent;
        const plainText = tempDiv.textContent || tempDiv.innerText || '';
        
        // Textarea'ya aktar
        textarea.value = plainText;
        
        // Summernote'u yok et
        $(summernoteDiv).summernote('destroy');
        summernoteInstances[inputId] = null;
        
        textarea.style.display = 'block';
        summernoteDiv.style.display = 'none';
        
        editorStates[inputId] = false;
        
        // Dil sisteminden metni al
        const currentLang = localStorage.getItem('megabreCompareLang') || (navigator.language || navigator.userLanguage).substring(0, 2).toLowerCase();
        if (currentLang === 'tr') {
            toggleText.textContent = 'Editörü Aç';
        } else if (currentLang === 'es') {
            toggleText.textContent = 'Abrir Editor';
        } else {
            toggleText.textContent = 'Open Editor';
        }
        
        toggleBtn.classList.remove('btn-warning');
        toggleBtn.classList.add('btn-info');
    }
}

// Editör toggle butonları için event listener
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.toggle-editor').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            toggleEditor(targetId);
        });
    });
});

let originalResult1 = ''; // Orijinal metni saklamak için
let originalResult2 = '';
let showingDifferences = false; // Toggle durumu için

// "Atla Göster" Fonksiyonu
function setupSkipButton(differentLines) {
    let currentIndex = 0;

    document.getElementById('skipButton').addEventListener('click', function() {
        const nextLineIndex = differentLines[currentIndex];
        
        // Her iki sonuç alanını aynı satıra ortalayacak şekilde kaydırıyoruz
        scrollToLine(document.getElementById('result1'), nextLineIndex);
        scrollToLine(document.getElementById('result2'), nextLineIndex);
        
        currentIndex = (currentIndex + 1) % differentLines.length;
    });

    // "Sadece Farkları Göster" butonuna işlev ekliyoruz
    document.getElementById('showDifferencesButton').addEventListener('click', function() {
        if (!showingDifferences) {
            showOnlyDifferences();
        } else {
            restoreOriginalText();
        }
        showingDifferences = !showingDifferences;
    });
}

// Farklılıkları gösterme fonksiyonu
function showOnlyDifferences() {
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    
    // Orijinal metinleri sakla (ilk tıklamada saklanacak)
    if (!originalResult1) originalResult1 = result1.innerHTML;
    if (!originalResult2) originalResult2 = result2.innerHTML;
    
    // Tüm satırları alın
    const lines1 = originalResult1.split('\n');
    const lines2 = originalResult2.split('\n');
    
    let filteredResult1 = '';
    let filteredResult2 = '';

    for (let i = 0; i < lines1.length; i++) {
        if (lines1[i] !== lines2[i]) {
            filteredResult1 += lines1[i] + '\n';
            filteredResult2 += lines2[i] + '\n';
        }
    }

    result1.innerHTML = filteredResult1;
    result2.innerHTML = filteredResult2;
}

// Orijinal metni geri yükleme fonksiyonu
function restoreOriginalText() {
    document.getElementById('result1').innerHTML = originalResult1;
    document.getElementById('result2').innerHTML = originalResult2;
}

// Satırı ekranın ortasına kaydırma fonksiyonu
function scrollToLine(element, lineIndex) {
    const lineHeight = 20; // Satır yüksekliği (px)
    const scrollPosition = lineIndex * lineHeight;
    const visibleHeight = element.clientHeight;

    // Satırın tam ortada olacak şekilde kaydırma işlemi
    element.scrollTo({
        top: scrollPosition - visibleHeight / 2 + lineHeight / 2,
        behavior: 'smooth'
    });
}

// Metinleri güvenli bir şekilde kaçış yaparak gösteren fonksiyon
function escapeHTML(text) {
    return text.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&#039;');
}


/*-------------------------------------------------*/
