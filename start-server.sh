#!/bin/bash

echo "🚀 Starting DSG Website Local Server..."
echo ""
echo "📍 Server will run at: http://localhost:8000"
echo "🌐 Open this URL in your browser"
echo ""
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

python3 -m http.server 8000
