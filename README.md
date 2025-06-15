CSI-Assignment-2-File-Manager
🗃️ Node.js File Management Tool

A simple file management tool built using Node.js core modules (`fs`, `path`, `http`, `url`). This tool allows you to:
- ✅ Create files  
- 📖 Read file contents  
- 🗑️ Delete files  

No third-party packages required!

────────────────────────────────────────

📁 Project Structure

file-management-tool/
├── server.js       # Main application file
└── files/          # Directory for storing files (auto-created)

────────────────────────────────────────

🚀 Getting Started

1️⃣ Clone the Repository or Set Up Manually
----------------------------------------------------
git clone https://github.com/your-username/file-management-tool.git
cd file-management-tool

(Or manually create the folder and add server.js)

2️⃣ Run the Server
----------------------------------------------------
node server.js

The server will start at:
http://localhost:3000

────────────────────────────────────────

📌 API Endpoints

➕ Create a File
----------------------------------------------------
Endpoint: /create  
Method: GET  
Query Parameters:
- filename – Name of the file to create  
- content – Content to write into the file  

Example:
http://localhost:3000/create?filename=example.txt&content=HelloWorld

📖 Read a File
----------------------------------------------------
Endpoint: /read  
Method: GET  
Query Parameters:
- filename – Name of the file to read  

Example:
http://localhost:3000/read?filename=example.txt

❌ Delete a File
----------------------------------------------------
Endpoint: /delete  
Method: GET  
Query Parameters:
- filename – Name of the file to delete  

Example:
http://localhost:3000/delete?filename=example.txt

────────────────────────────────────────

🧠 Core Modules Used

http     → Create and manage the web server  
fs       → File operations (read/write/delete)  
path     → Handle and resolve file paths  
url      → Parse URL and query strings  

────────────────────────────────────────

💡 Features

- No external libraries required  
- Auto-creates a `files/` folder for storage  
- Fully functional with just Node.js core modules  

────────────────────────────────────────

🧑‍💻 Author
Arnav Jain
