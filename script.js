// ===================================
// EXPERIMENTS DATA STRUCTURE
// ===================================
const experiments = [
    {
        id: 'exp1',
        number: 'Experiment 1',
        title: 'Java Applet Key Events',
        description: 'Implementation of KeyListener interface demonstrating keyPressed, keyReleased, and keyTyped events in Java Applets.',
        icon: '⌨️',
        files: [
            { name: 'KeyEventDemo.java', path: 'assets/experiments/Exp1/Exp1.txt' }
        ],
        manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 1.pdf',
        tags: ['applet', 'events', 'keyboard', 'awt']
    },
    {
        id: 'exp2',
        number: 'Experiment 2',
        title: 'AWT MouseListener Demo',
        description: 'Frame-based application demonstrating all MouseListener events: clicked, entered, exited, pressed, and released.',
        icon: '🖱️',
        files: [
            { name: 'MouseListenerExample.java', path: 'assets/experiments/Exp2/Exp2.txt' }
        ],
        manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 2.pdf',
        tags: ['awt', 'events', 'mouse', 'gui']
    },
    {
        id: 'exp3',
        number: 'Experiment 3',
        title: 'Swing Report Card Application',
        description: 'GUI application using Swing components to create a student report card with marks calculation and average display.',
        icon: '📊',
        files: [
            { name: 'ReportCard.java', path: 'assets/experiments/Exp3/Exp3.txt' }
        ],
        manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 3.pdf',
        tags: ['swing', 'gui', 'forms', 'calculator']
    },
    {
        id: 'exp4a',
        number: 'Experiment 4A',
        title: 'JDBC MySQL Connectivity',
        description: 'Basic database connection demonstration with MySQL including driver loading, connection establishment, and SELECT queries.',
        icon: '🗄️',
        files: [
            { name: 'databaseClass.java', path: 'assets/experiments/Exp4A/Exp4A.txt' }
        ],
        manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 4.pdf',
        tags: ['jdbc', 'mysql', 'database', 'sql']
    },
    {
        id: 'exp4b',
        number: 'Experiment 4B',
        title: 'Advanced JDBC Operations',
        description: 'Advanced JDBC implementation with separate connection class and PreparedStatement for INSERT operations on college database.',
        icon: '💾',
        files: [
            { name: 'Connection.java', path: 'assets/experiments/Exp4B/Connection_java_file.txt' },
            { name: 'GFG.java', path: 'assets/experiments/Exp4B/GFG_java_file.txt' }
        ],
        manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 4.pdf',
        tags: ['jdbc', 'mysql', 'database', 'prepared-statement']
    },
    {
        id: 'exp5a',
        number: 'Experiment 5A',
        title: 'String Palindrome Checker',
        description: 'String manipulation program to check if a given string is a palindrome using character-by-character comparison.',
        icon: '🔤',
        files: [
            { name: 'StringPalindrome.java', path: 'assets/experiments/Exp5A/Exp5A.txt' }
        ],
        manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 5.pdf',
        tags: ['string', 'palindrome', 'algorithms', 'basics']
    },
    {
        id: 'exp5b',
        number: 'Experiment 5B',
        title: 'Number Palindrome Checker',
        description: 'Numeric algorithm to check if a number is palindrome using modulo operations and number reversal technique.',
        icon: '🔢',
        files: [
            { name: 'NumberPalindrome.java', path: 'assets/experiments/Exp5B/Exp5B.txt' }
        ],
        manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 5.pdf',
        tags: ['numbers', 'palindrome', 'algorithms', 'math']
    },
    {
        id: 'exp6',
        number: 'Experiment 6',
        title: 'InetAddress Network Demo',
        description: 'Networking program demonstrating hostname resolution and IP address lookup using InetAddress class.',
        icon: '🌐',
        files: [
            { name: 'InetDemo.java', path: 'assets/experiments/Exp6/InetDemo_java.txt' }
        ],
        manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment no 6.pdf',
        tags: ['networking', 'dns', 'ip-address', 'internet']
    },
    {
        id: 'exp7',
        number: 'Experiment 7',
        title: 'JDBC Employee Database',
        description: 'Complete database application with JDBC driver registration and ResultSet processing for employee records retrieval.',
        icon: '👥',
        files: [
            { name: 'databaseApplication.java', path: 'assets/experiments/Exp7/Exp7.txt' }
        ],
        manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 7.pdf',
        tags: ['jdbc', 'database', 'employee', 'resultset']
    },
    {
        id: 'exp8',
        number: 'Experiment 8',
        title: 'RMI - Remote Method Invocation',
        description: 'Complete RMI implementation with remote interface, implementation class, server registry binding, and client invocation.',
        icon: '🔗',
        files: [
            { name: 'Hello.java', path: 'assets/experiments/Exp8/1.Defining the Remote Interface/Hello_java.txt' },
            { name: 'ImplExample.java', path: 'assets/experiments/Exp8/2.Developing the Implementation Class (Remote Object)/ImplExample_java.txt' },
            { name: 'Server.java', path: 'assets/experiments/Exp8/3.Developing the Server Program/Server_java.txt' },
            { name: 'Client.java', path: 'assets/experiments/Exp8/4.Developing the Client Program/Client_java.txt' }
        ],
        manual: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 8.pdf',
        tags: ['rmi', 'networking', 'distributed', 'remote']
    }
];

// ===================================
// STATE MANAGEMENT
// ===================================
let currentExperiment = null;
let currentFileIndex = 0;
let allExperiments = [...experiments];

// ===================================
// DOM ELEMENTS
// ===================================
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const resultsCount = document.getElementById('resultsCount');
const experimentsGrid = document.getElementById('experimentsGrid');
const noResults = document.getElementById('noResults');
const codeModal = document.getElementById('codeModal');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const fileTabs = document.getElementById('fileTabs');
const currentFileName = document.getElementById('currentFileName');
const codeContent = document.getElementById('codeContent');
const copyCodeBtn = document.getElementById('copyCodeBtn');
const copyFeedback = document.getElementById('copyFeedback');
const loadingSpinner = document.getElementById('loadingSpinner');
const updateNotification = document.getElementById('updateNotification');
const updateBtn = document.getElementById('updateBtn');
const dismissBtn = document.getElementById('dismissBtn');

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    renderExperiments(experiments);
    initializeEventListeners();
    initializeServiceWorker();
});

// ===================================
// RENDER EXPERIMENTS GRID
// ===================================
function renderExperiments(experimentsToRender) {
    experimentsGrid.innerHTML = '';
    
    if (experimentsToRender.length === 0) {
        experimentsGrid.classList.add('hidden');
        noResults.classList.remove('hidden');
        resultsCount.textContent = 'No experiments found';
        return;
    }
    
    experimentsGrid.classList.remove('hidden');
    noResults.classList.add('hidden');
    resultsCount.textContent = `${experimentsToRender.length} experiment${experimentsToRender.length !== 1 ? 's' : ''} available`;
    
    experimentsToRender.forEach((experiment, index) => {
        const card = createExperimentCard(experiment, index);
        experimentsGrid.appendChild(card);
    });
}

// ===================================
// CREATE EXPERIMENT CARD
// ===================================
function createExperimentCard(experiment, index) {
    const card = document.createElement('div');
    card.className = 'experiment-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-icon">${experiment.icon}</div>
            <div class="card-title-section">
                <div class="card-number">${experiment.number}</div>
                <h3 class="card-title">${experiment.title}</h3>
            </div>
        </div>
        <p class="card-description">${experiment.description}</p>
        <div class="card-footer">
            <span class="files-count">
                <span>📄</span>
                ${experiment.files.length} file${experiment.files.length !== 1 ? 's' : ''}
            </span>
            <button class="view-code-btn">View Code →</button>
        </div>
    `;
    
    // View code button
    const viewCodeBtn = card.querySelector('.view-code-btn');
    viewCodeBtn.addEventListener('click', () => {
        openExperiment(experiment);
    });
    
    return card;
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        clearSearchBtn.classList.add('hidden');
        renderExperiments(experiments);
        return;
    }
    
    clearSearchBtn.classList.remove('hidden');
    
    const filtered = experiments.filter(exp => {
        const searchableText = `
            ${exp.title} 
            ${exp.description} 
            ${exp.number}
            ${exp.tags.join(' ')}
            ${exp.files.map(f => f.name).join(' ')}
        `.toLowerCase();
        
        return searchableText.includes(searchTerm);
    });
    
    renderExperiments(filtered);
}

// ===================================
// OPEN EXPERIMENT MODAL
// ===================================
async function openExperiment(experiment) {
    currentExperiment = experiment;
    currentFileIndex = 0;
    
    modalTitle.textContent = experiment.title;
    modalDescription.textContent = experiment.description;
    
    // Render file tabs
    renderFileTabs(experiment.files);
    
    // Load first file
    await loadFile(experiment.files[0]);
    
    // Show modal
    codeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// ===================================
// RENDER FILE TABS
// ===================================
function renderFileTabs(files) {
    fileTabs.innerHTML = '';
    
    if (files.length === 1) {
        fileTabs.style.display = 'none';
        return;
    }
    
    fileTabs.style.display = 'flex';
    
    files.forEach((file, index) => {
        const tab = document.createElement('button');
        tab.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        tab.textContent = file.name;
        tab.addEventListener('click', () => switchFile(index));
        fileTabs.appendChild(tab);
    });
}

// ===================================
// SWITCH FILE TAB
// ===================================
async function switchFile(index) {
    currentFileIndex = index;
    
    // Update tab active state
    const tabs = fileTabs.querySelectorAll('.tab-btn');
    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
    
    // Load file content
    await loadFile(currentExperiment.files[index]);
}

// ===================================
// LOAD FILE CONTENT
// ===================================
async function loadFile(file) {
    try {
        loadingSpinner.classList.remove('hidden');
        currentFileName.textContent = file.name;
        
        const response = await fetch(file.path);
        if (!response.ok) throw new Error('File not found');
        
        const content = await response.text();
        
        // Clean up content (remove markdown code blocks if present)
        let cleanContent = content.trim();
        if (cleanContent.startsWith('```')) {
            cleanContent = cleanContent.replace(/^```[\w]*\n/, '').replace(/\n```$/, '');
        }
        
        codeContent.textContent = cleanContent;
        
        // Apply syntax highlighting
        Prism.highlightElement(codeContent);
        
        loadingSpinner.classList.add('hidden');
    } catch (error) {
        console.error('Error loading file:', error);
        codeContent.textContent = '// Error loading file. Please try again.';
        loadingSpinner.classList.add('hidden');
    }
}

// ===================================
// COPY CODE TO CLIPBOARD
// ===================================
async function copyCode() {
    const code = codeContent.textContent;
    
    try {
        await navigator.clipboard.writeText(code);
        showCopyFeedback();
    } catch (error) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showCopyFeedback();
    }
}

function showCopyFeedback() {
    const copyText = copyCodeBtn.querySelector('.copy-text');
    const copyIcon = copyCodeBtn.querySelector('.copy-icon');
    
    // Update button text and icon
    copyText.textContent = 'Copied!';
    copyIcon.textContent = '✓';
    copyCodeBtn.style.background = 'rgba(6, 255, 165, 0.3)';
    
    // Show feedback banner
    copyFeedback.classList.remove('hidden');
    
    // Reset after 2 seconds
    setTimeout(() => {
        copyText.textContent = 'Copy Code';
        copyIcon.textContent = '📋';
        copyCodeBtn.style.background = '';
        copyFeedback.classList.add('hidden');
    }, 2000);
}

// ===================================
// MANUALS MODAL FUNCTIONALITY
// ===================================
const manualsData = [
    { name: 'Experiment No 1', path: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 1.pdf', icon: '⌨️' },
    { name: 'Experiment No 2', path: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 2.pdf', icon: '🖱️' },
    { name: 'Experiment No 3', path: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 3.pdf', icon: '📊' },
    { name: 'Experiment No 4', path: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 4.pdf', icon: '🗄️' },
    { name: 'Experiment No 5', path: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 5.pdf', icon: '🌐' },
    { name: 'Experiment no 6', path: 'assets/PR_MANUAL/PR_MANUAL/Experiment no 6.pdf', icon: '🔗' },
    { name: 'Experiment No 7', path: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 7.pdf', icon: '🛠️' },
    { name: 'Experiment No 8', path: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 8.pdf', icon: '☁️' },
    { name: 'Experiment No 9', path: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 9.pdf', icon: '🔐' },
    { name: 'Experiment No 10', path: 'assets/PR_MANUAL/PR_MANUAL/Experiment No 10.pdf', icon: '📡' },
    { name: 'Title Pages - Advanced Java', path: 'assets/PR_MANUAL/PR_MANUAL/title pages_adv java.pdf', icon: '📄' },
    { name: 'ALL Practicals for Exam', path: 'assets/PR_MANUAL/PR_MANUAL/ALL practicals for exam.pdf', icon: '📚' }
];

let currentManualPath = '';

// DOM Elements for Manuals Modal
const openManualsBtn = document.getElementById('openManualsBtn');
const manualsModal = document.getElementById('manualsModal');
const closeManualsModal = document.getElementById('closeManualsModal');
const manualsList = document.getElementById('manualsList');
const previewPlaceholder = document.getElementById('previewPlaceholder');
const previewContainer = document.getElementById('previewContainer');
const pdfPreview = document.getElementById('pdfPreview');
const previewTitle = document.getElementById('previewTitle');
const downloadPreviewBtn = document.getElementById('downloadPreviewBtn');

// Open Manuals Modal
openManualsBtn.addEventListener('click', () => {
    manualsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderManualsList();
});

// Close Manuals Modal
closeManualsModal.addEventListener('click', closeManuals);
manualsModal.addEventListener('click', (e) => {
    if (e.target === manualsModal || e.target.classList.contains('modal-overlay')) {
        closeManuals();
    }
});

function closeManuals() {
    manualsModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    resetPreview();
}

// Render Manuals List
function renderManualsList() {
    manualsList.innerHTML = '';
    
    manualsData.forEach((manual, index) => {
        const manualItem = document.createElement('div');
        manualItem.className = 'manual-item';
        manualItem.style.animationDelay = `${index * 0.05}s`;
        
        manualItem.innerHTML = `
            <div class="manual-icon">${manual.icon}</div>
            <div class="manual-info">
                <h4 class="manual-name">${manual.name}</h4>
                <p class="manual-size">PDF Document</p>
            </div>
            <button class="manual-preview-btn" title="Preview">
                <span>👁️</span>
            </button>
        `;
        
        const previewBtn = manualItem.querySelector('.manual-preview-btn');
        previewBtn.addEventListener('click', () => {
            showPreview(manual);
            // Highlight selected manual
            document.querySelectorAll('.manual-item').forEach(item => {
                item.classList.remove('active');
            });
            manualItem.classList.add('active');
        });
        
        manualsList.appendChild(manualItem);
    });
}

// Show PDF Preview
function showPreview(manual) {
    currentManualPath = manual.path;
    previewTitle.textContent = manual.name;
    pdfPreview.src = manual.path;
    
    previewPlaceholder.classList.add('hidden');
    previewContainer.classList.remove('hidden');
}

// Reset Preview
function resetPreview() {
    currentManualPath = '';
    pdfPreview.src = '';
    previewPlaceholder.classList.remove('hidden');
    previewContainer.classList.add('hidden');
    
    document.querySelectorAll('.manual-item').forEach(item => {
        item.classList.remove('active');
    });
}

// Download Preview PDF
downloadPreviewBtn.addEventListener('click', () => {
    if (currentManualPath) {
        const link = document.createElement('a');
        link.href = currentManualPath;
        link.download = previewTitle.textContent + '.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show feedback
        downloadPreviewBtn.innerHTML = '<span>✓</span><span>Downloaded!</span>';
        downloadPreviewBtn.style.background = 'linear-gradient(135deg, #06ffa5, #00cc88)';
        
        setTimeout(() => {
            downloadPreviewBtn.innerHTML = '<span>⬇️</span><span>Download PDF</span>';
            downloadPreviewBtn.style.background = '';
        }, 2000);
    }
});

// ===================================
// OUTPUTS MODAL FUNCTIONALITY
// ===================================
const outputsData = [
    { name: 'Java Output 1', path: 'assets/PR_MANUAL/Output/Java_1.pdf', icon: '📄', type: 'PDF' },
    { name: 'Java Output 2', path: 'assets/PR_MANUAL/Output/Java_2.pdf', icon: '📄', type: 'PDF' },
    { name: 'Java Output 3', path: 'assets/PR_MANUAL/Output/Java_3.pdf', icon: '📄', type: 'PDF' },
    { name: 'Java Output 4', path: 'assets/PR_MANUAL/Output/Java_4.pdf', icon: '📄', type: 'PDF' },
    { name: 'Java Output 5', path: 'assets/PR_MANUAL/Output/Java_5.pdf', icon: '📄', type: 'PDF' },
    { name: 'Java Output 6', path: 'assets/PR_MANUAL/Output/Java_6.pdf', icon: '📄', type: 'PDF' },
    { name: 'Java Output 7', path: 'assets/PR_MANUAL/Output/Java_7.pdf', icon: '📄', type: 'PDF' },
    { name: 'Java Output 8', path: 'assets/PR_MANUAL/Output/Java_8.pdf', icon: '📄', type: 'PDF' },
    { name: 'Java 9 Code', path: 'assets/PR_MANUAL/Output/JAVA_9_CODE.docx', icon: '📝', type: 'DOCX' }
];

let currentOutputPath = '';
let currentOutputType = '';

// DOM Elements for Outputs Modal
const openOutputsBtn = document.getElementById('openOutputsBtn');
const outputsModal = document.getElementById('outputsModal');
const closeOutputsModal = document.getElementById('closeOutputsModal');
const outputsList = document.getElementById('outputsList');
const outputPreviewPlaceholder = document.getElementById('outputPreviewPlaceholder');
const outputPreviewContainer = document.getElementById('outputPreviewContainer');
const outputPdfPreview = document.getElementById('outputPdfPreview');
const outputDocxPreview = document.getElementById('outputDocxPreview');
const outputDocxLoading = document.getElementById('outputDocxLoading');
const outputPreviewTitle = document.getElementById('outputPreviewTitle');
const downloadOutputBtn = document.getElementById('downloadOutputBtn');

// Open Outputs Modal
openOutputsBtn.addEventListener('click', () => {
    outputsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderOutputsList();
});

// Close Outputs Modal
closeOutputsModal.addEventListener('click', closeOutputs);
outputsModal.addEventListener('click', (e) => {
    if (e.target === outputsModal || e.target.classList.contains('modal-overlay')) {
        closeOutputs();
    }
});

function closeOutputs() {
    outputsModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    resetOutputPreview();
}

// Render Outputs List
function renderOutputsList() {
    outputsList.innerHTML = '';
    
    outputsData.forEach((output, index) => {
        const outputItem = document.createElement('div');
        outputItem.className = 'output-item';
        outputItem.style.animationDelay = `${index * 0.05}s`;
        
        outputItem.innerHTML = `
            <div class="output-icon">${output.icon}</div>
            <div class="output-info">
                <h4 class="output-name">${output.name}</h4>
                <p class="output-type">${output.type} Document</p>
            </div>
            <button class="output-preview-btn" title="Preview">
                <span>👁️</span>
            </button>
        `;
        
        const previewBtn = outputItem.querySelector('.output-preview-btn');
        previewBtn.addEventListener('click', () => {
            showOutputPreview(output);
            // Highlight selected output
            document.querySelectorAll('.output-item').forEach(item => {
                item.classList.remove('active');
            });
            outputItem.classList.add('active');
        });
        
        outputsList.appendChild(outputItem);
    });
}

// Show Output Preview
async function showOutputPreview(output) {
    currentOutputPath = output.path;
    currentOutputType = output.type;
    outputPreviewTitle.textContent = output.name;
    
    if (output.type === 'PDF') {
        outputPdfPreview.src = output.path;
        outputPdfPreview.classList.remove('hidden');
        outputDocxPreview.classList.add('hidden');
        outputDocxLoading.classList.add('hidden');
    } else if (output.type === 'DOCX') {
        // Show loading
        outputPdfPreview.classList.add('hidden');
        outputDocxPreview.classList.add('hidden');
        outputDocxLoading.classList.remove('hidden');
        
        try {
            // Check if mammoth library is loaded
            if (typeof mammoth === 'undefined') {
                throw new Error('Mammoth.js library not loaded');
            }
            
            console.log('Fetching DOCX from:', output.path);
            const response = await fetch(output.path);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
            }
            
            const arrayBuffer = await response.arrayBuffer();
            console.log('DOCX file size:', arrayBuffer.byteLength, 'bytes');
            
            if (arrayBuffer.byteLength === 0) {
                throw new Error('File is empty');
            }
            
            // Convert DOCX to HTML using Mammoth.js
            console.log('Converting DOCX to HTML...');
            const result = await mammoth.convertToHtml({arrayBuffer: arrayBuffer});
            
            // Display any warnings
            if (result.messages && result.messages.length > 0) {
                console.log('Conversion messages:', result.messages);
            }
            
            // Clear previous content and insert HTML
            outputDocxPreview.innerHTML = `
                <div class="docx-content">
                    ${result.value}
                </div>
            `;
            
            console.log('DOCX rendered successfully');
            
            // Hide loading, show preview
            outputDocxLoading.classList.add('hidden');
            outputDocxPreview.classList.remove('hidden');
        } catch (error) {
            console.error('Error loading DOCX:', error);
            console.error('Error details:', error.message, error.stack);
            
            outputDocxLoading.classList.remove('hidden');
            outputDocxLoading.innerHTML = `
                <div class="docx-icon">⚠️</div>
                <h4>Failed to load DOCX preview</h4>
                <p style="color: var(--text-secondary); margin: 0.5rem 0;">${error.message || 'Unknown error occurred'}</p>
                <p style="color: var(--text-secondary); font-size: 0.85rem;">Please try downloading the file instead.</p>
                <button onclick="downloadOutputBtn.click()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); border: none; border-radius: 6px; color: white; cursor: pointer; font-weight: 600;">
                    ⬇️ Download File
                </button>
            `;
        }
    }
    
    outputPreviewPlaceholder.classList.add('hidden');
    outputPreviewContainer.classList.remove('hidden');
}

// Reset Output Preview
function resetOutputPreview() {
    currentOutputPath = '';
    currentOutputType = '';
    outputPdfPreview.src = '';
    outputDocxPreview.innerHTML = '';
    outputPreviewPlaceholder.classList.remove('hidden');
    outputPreviewContainer.classList.add('hidden');
    outputPdfPreview.classList.remove('hidden');
    outputDocxPreview.classList.add('hidden');
    outputDocxLoading.classList.add('hidden');
    
    document.querySelectorAll('.output-item').forEach(item => {
        item.classList.remove('active');
    });
}

// Download Output
function downloadOutput(output) {
    const path = output.path || currentOutputPath;
    const type = output.type || currentOutputType;
    const name = output.name || outputPreviewTitle.textContent;
    
    if (path) {
        const link = document.createElement('a');
        link.href = path;
        const extension = type === 'PDF' ? '.pdf' : '.docx';
        link.download = name + extension;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show feedback
        downloadOutputBtn.innerHTML = '<span>✓</span><span>Downloaded!</span>';
        downloadOutputBtn.style.background = 'linear-gradient(135deg, #06ffa5, #00cc88)';
        
        setTimeout(() => {
            downloadOutputBtn.innerHTML = '<span>⬇️</span><span>Download File</span>';
            downloadOutputBtn.style.background = '';
        }, 2000);
    }
}

// Download Output Button
downloadOutputBtn.addEventListener('click', () => {
    downloadOutput({ path: currentOutputPath, type: currentOutputType });
});

// ===================================
// CLOSE MODAL
// ===================================
function closeModal() {
    codeModal.classList.add('hidden');
    document.body.style.overflow = '';
    currentExperiment = null;
    currentFileIndex = 0;
}

// ===================================
// EVENT LISTENERS
// ===================================
function initializeEventListeners() {
    // Search
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            handleSearch();
        }
    });
    
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        handleSearch();
        searchInput.focus();
    });
    
    // Modal close
    closeModalBtn.addEventListener('click', closeModal);
    
    codeModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });
    
    // Copy code
    copyCodeBtn.addEventListener('click', copyCode);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Escape to close modal
        if (e.key === 'Escape' && !codeModal.classList.contains('hidden')) {
            closeModal();
        }
        
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
        
        // Ctrl/Cmd + C when modal is open to copy code
        if ((e.ctrlKey || e.metaKey) && e.key === 'c' && !codeModal.classList.contains('hidden')) {
            const selection = window.getSelection();
            if (!selection.toString()) {
                e.preventDefault();
                copyCode();
            }
        }
    });
    
    // Update notification
    updateBtn.addEventListener('click', () => {
        window.location.reload();
    });
    
    dismissBtn.addEventListener('click', () => {
        updateNotification.classList.add('hidden');
    });
}

// ===================================
// SERVICE WORKER REGISTRATION
// ===================================
function initializeServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New service worker available
                            updateNotification.classList.remove('hidden');
                        }
                    });
                });
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
        
        // Listen for controller change (new SW activated)
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            window.location.reload();
        });
    }
}

// ===================================
// PWA INSTALL PROMPT
// ===================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Optionally show install button
    console.log('PWA install prompt available');
});

window.addEventListener('appinstalled', () => {
    console.log('PWA installed successfully');
    deferredPrompt = null;
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Lazy load images if any
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// ANALYTICS (Optional)
// ===================================
function trackEvent(category, action, label) {
    // Placeholder for analytics
    console.log('Event:', category, action, label);
}

// Track experiment views
const originalOpenExperiment = openExperiment;
openExperiment = function(experiment) {
    trackEvent('Experiment', 'View', experiment.title);
    return originalOpenExperiment.call(this, experiment);
};

// Track code copies
const originalCopyCode = copyCode;
copyCode = function() {
    trackEvent('Code', 'Copy', currentExperiment?.title);
    return originalCopyCode.call(this);
};

// ===================================
// CONSOLE EASTER EGG
// ===================================
console.log('%c⚡ Advanced Java Code Vault ⚡', 'color: #4361ee; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with ❤️ for Engineering Students', 'color: #7209b7; font-size: 14px;');
console.log('%cTip: Press Ctrl/Cmd + K to search experiments!', 'color: #06ffa5; font-size: 12px;');

// ===================================
// VERIFY DOCX LIBRARY LOADED
// ===================================
window.addEventListener('load', () => {
    if (typeof mammoth !== 'undefined') {
        console.log('%c✓ Mammoth.js Library Loaded', 'color: #06ffa5; font-weight: bold;');
        console.log('mammoth object:', mammoth);
    } else {
        console.warn('%c⚠ Mammoth.js Library NOT Loaded', 'color: #f72585; font-weight: bold;');
        console.warn('DOCX preview will not work. Check if the library script is loaded correctly.');
    }
});