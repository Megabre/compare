<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Comparison Tool</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
    <h2 class="text-center">Text Comparison Tool</h2>

    <div class="row mt-4">
        <div class="col-md-6">
            <textarea id="text1" class="form-control" style="width: 100%;" rows="10" placeholder="Enter the first text here..."></textarea>
        </div>
        <div class="col-md-6">
            <textarea id="text2" class="form-control" style="width: 100%;" rows="10" placeholder="Enter the second text here..."></textarea>
        </div>
    </div>

    <div class="text-center mt-3">
        <button onclick="compareTexts(false)" class="btn btn-primary">Compare</button>
        <button onclick="compareTexts(true)" class="btn btn-secondary">Show Only Missing</button>
    </div>

    <div class="result mt-4" id="result">
        <!-- Results will appear here -->
    </div>
</div>

<script>
function compareTexts(showOnlyMissing) {
    const text1 = document.getElementById("text1").value.split("\n");
    const text2 = document.getElementById("text2").value.split("\n");

    const lineCount1 = text1.length;
    const lineCount2 = text2.length;
    const lineDifference = Math.abs(lineCount1 - lineCount2);

    let missingLines = [];
    const maxLength = Math.max(lineCount1, lineCount2);
    for (let i = 0; i < maxLength; i++) {
        if (text1[i] && text1[i] !== text2[i]) {
            if (showOnlyMissing && (!text2[i] || text1[i] !== text2[i])) {
                missingLines.push({ lineNumber: i + 1, text1Line: text1[i], text2Line: text2[i] || "MISSING" });
            } else if (!showOnlyMissing) {
                missingLines.push({ lineNumber: i + 1, text1Line: text1[i], text2Line: text2[i] || "MISSING" });
            }
        }
    }

    let result = `
        <div class="alert alert-info">
            The first text has <strong>${lineCount1}</strong> lines, the second text has <strong>${lineCount2}</strong> lines.
            There is a total difference of <strong>${lineDifference}</strong> lines.
        </div>`;

    if (missingLines.length > 0) {
        result += `
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Line No</th>
                        <th>First Text</th>
                        <th>Second Text</th>
                    </tr>
                </thead>
                <tbody>`;
        
        missingLines.forEach(line => {
            result += `
                <tr>
                    <td>${line.lineNumber}</td>
                    <td>${line.text1Line}</td>
                    <td>${line.text2Line}</td>
                </tr>`;
        });

        result += `
                </tbody>
            </table>`;
    } else {
        result += `<div class="alert alert-success">All lines match.</div>`;
    }

    document.getElementById("result").innerHTML = result;
}
</script>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
