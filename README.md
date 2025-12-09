# Megabre Compare

<div align="center">

![Megabre Compare](https://img.shields.io/badge/Megabre-Compare-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)

**A powerful, client-side text comparison tool for developers, writers, and content creators**

[![GitHub stars](https://img.shields.io/github/stars/Megabre/compare?style=social)](https://github.com/Megabre/compare)
[![GitHub forks](https://img.shields.io/github/forks/Megabre/compare?style=social)](https://github.com/Megabre/compare)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Examples](#-examples) • [Contributing](#-contributing)

**🔗 Repository**: [https://github.com/Megabre/compare](https://github.com/Megabre/compare)

</div>

---

## 📖 About

**Megabre Compare** is a sophisticated, browser-based text comparison tool designed to help you quickly identify differences between two text documents. Whether you're comparing code versions, reviewing document changes, or analyzing text variations, this tool provides an intuitive and efficient way to visualize differences line by line.

Built with modern web technologies, Megabre Compare runs entirely in your browser—your data never leaves your device, ensuring complete privacy and security. Perfect for developers comparing code versions, content creators reviewing drafts, or anyone working with large documents who needs to spot subtle differences quickly.

## ✨ Features

### 🔍 **Advanced Text Comparison**
- **Line-by-line comparison**: Compare two texts side by side with visual highlighting
- **Word-level differences**: Automatically highlights different words in red for easy identification
- **Smart diff detection**: Identifies added, removed, and modified lines instantly

### 🎯 **Navigation & Filtering**
- **Skip to Differences**: Jump directly to the next difference with a single click
- **Show Only Differences**: Filter view to display only lines that differ between texts
- **Line numbering**: Each line is numbered for easy reference and navigation

### 🎨 **User Experience**
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean Interface**: Minimalist design focused on functionality

### 🛠️ **Text Utilities**
- **Text Cleaning**: Remove unnecessary whitespace and formatting
- **Case Conversion**: Convert text to lowercase with one click
- **Quick Clear**: Reset input fields instantly

### 🔒 **Security & Privacy**
- **100% Client-Side**: All processing happens in your browser
- **No Data Transmission**: Your texts never leave your device
- **XSS Protection**: Input sanitization prevents malicious code execution
- **Privacy First**: No tracking, no analytics, no data collection

## 🚀 Installation

### Option 1: Direct Download
1. Clone or download this repository from [https://github.com/Megabre/compare](https://github.com/Megabre/compare)
2. Extract the files to your web server directory
3. Open `index.php` in your browser

### Option 2: GitHub Pages
1. Fork this repository
2. Enable GitHub Pages in your repository settings
3. Access your instance at `https://megabre.github.io/compare/`

### Option 3: Local Development
```bash
# Clone the repository
git clone https://github.com/Megabre/compare.git

# Navigate to the directory
cd compare

# Open in your browser
# Simply open index.php in your preferred browser
```

## 📝 Usage

### Basic Comparison

1. **Enter Your Texts**: Paste or type your first text in the left textarea
2. **Enter Comparison Text**: Paste or type your second text in the right textarea
3. **Click Compare**: Press the "Compare" button to analyze differences
4. **Review Results**: Differences are highlighted automatically

### Advanced Features

#### Skip to Differences
- Click the **"Skip Line / Show Differences"** button to jump to the next difference
- Useful for navigating through large documents quickly

#### Filter Differences
- Click **"Show Only Differences"** to hide identical lines
- Click again to restore the full view

#### Text Utilities
- **Clear**: Remove all text from an input field
- **Convert to Lowercase**: Transform text to lowercase
- **Remove Spaces**: Clean up unnecessary whitespace

#### Dark Mode
- Toggle dark/light mode using the button in the top-right corner
- Reduces eye strain during extended use

## 💡 Use Cases

### 👨‍💻 **For Developers**
- Compare code versions before committing changes
- Review pull requests and code diffs
- Identify changes in configuration files
- Debug by comparing working vs. broken code

### ✍️ **For Writers & Editors**
- Compare document revisions
- Review translations and localized content
- Check for consistency across multiple versions
- Identify formatting differences

### 📊 **For Content Creators**
- Compare article drafts
- Review SEO meta descriptions
- Check social media post variations
- Analyze A/B test content

### 🏢 **For Businesses**
- Compare contract versions
- Review policy documents
- Check legal document changes
- Audit report modifications

## 🎯 Examples

### Example 1: Code Comparison
```
Original Code:
function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return total;
}

Modified Code:
function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price * item.quantity;
    }
    return total;
}
```

Megabre Compare will highlight the difference in the calculation line, making it easy to spot the change.

### Example 2: Document Review
Compare two versions of a document to see:
- Added paragraphs
- Removed sections
- Modified sentences
- Formatting changes

## ⚙️ Technical Details

### Performance
- **Maximum Lines**: 5,000 lines per text (prevents browser slowdown)
- **Character Limit**: ~100,000 characters per textarea
- **Processing**: Real-time comparison using efficient algorithms

### Browser Compatibility
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

### Security Features
- **XSS Protection**: All user input is sanitized using HTML entity encoding
- **Input Validation**: Length and line count limits prevent abuse
- **No External Requests**: Works completely offline after initial load

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with dark mode support
- **Vanilla JavaScript**: No dependencies, pure JavaScript
- **Client-Side Processing**: All operations run in the browser

## 🔧 Configuration

### Adjusting Limits
To modify the maximum line limit, edit `app.js`:

```javascript
const lines1 = text1.split('\n').slice(0, 5000); // Change 5000 to your desired limit
const lines2 = text2.split('\n').slice(0, 5000);
```

### Customizing Colors
Edit `style.css` to change highlight colors:

```css
.different-line {
    background-color: #519b6296; /* Change this color */
}
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository** from [https://github.com/Megabre/compare](https://github.com/Megabre/compare)
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request** on [GitHub](https://github.com/Megabre/compare/pulls)

### Contribution Ideas
- Add syntax highlighting for code comparison
- Implement export functionality (PDF, HTML, etc.)
- Add support for file uploads
- Create a command-line version
- Add more text processing utilities
- Improve mobile responsiveness

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ by the Megabre team
- Inspired by the need for efficient text comparison tools
- Thanks to all contributors and users

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Megabre/compare/issues)
- **Website**: [https://www.megabre.com](https://www.megabre.com)
- **Repository**: [https://github.com/Megabre/compare](https://github.com/Megabre/compare)

## 🌟 Star History

If you find this project useful, please consider giving it a ⭐ on [GitHub](https://github.com/Megabre/compare)!

---

<div align="center">

**Made with ❤️ by [Megabre](https://www.megabre.com)**

⭐ **Star us on [GitHub](https://github.com/Megabre/compare)** ⭐

[⬆ Back to Top](#megabre-compare)

</div>
