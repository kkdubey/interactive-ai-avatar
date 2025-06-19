# Azure AI Avatar - Interactive AI Tutor

A modern web application that combines Azure Speech Services, Azure OpenAI, and Azure AI Avatar to create an interactive AI tutor experience with real-time speech recognition, text-to-speech, and animated avatar responses.

## Features

- 🎤 **Real-time Speech Recognition** - Voice input with continuous conversation mode
- 🗣️ **Text-to-Speech Synthesis** - Natural voice responses with avatar lip-sync
- 👤 **Animated AI Avatar** - Interactive 3D avatar with customizable characters and styles
- 🤖 **Azure OpenAI Integration** - Powered by GPT-4 for intelligent conversations
- 🔍 **Azure Cognitive Search** - Optional "On Your Data" functionality
- 🎛️ **Auto-start Microphone** - Automatic voice activation when session starts
- 📱 **Responsive Design** - Modern, mobile-friendly interface
- 🧪 **Built-in Testing Tools** - Microphone and audio level testing

## Prerequisites

Before running this application, you'll need:

1. **Azure Speech Service** - For speech recognition and text-to-speech
2. **Azure OpenAI Service** - For AI conversation capabilities
3. **Azure Cognitive Search** (Optional) - For "On Your Data" functionality
4. **Modern Web Browser** - Chrome, Firefox, Edge, or Safari with microphone support

## Project Structure

```
Azure-Ai-Avatar/
├── chat.html              # Main application interface
├── README.md              # This documentation file
├── css/
│   └── style.css          # Modern responsive styling
├── image/
│   ├── attachment.jpg     # Upload icon
│   └── background.png     # Background image
└── js/
    ├── chat.js            # Core avatar and chat functionality
    ├── config.js          # Configuration and default settings
    └── microphone-tests.js # Microphone testing utilities
```

## Setup Instructions

### 1. Azure Services Configuration

#### Azure Speech Service
1. Create an Azure Speech Service resource in the Azure portal
2. Note the **Region** and **API Key**
3. Optionally configure a private endpoint if needed

#### Azure OpenAI Service
1. Create an Azure OpenAI resource
2. Deploy a GPT-4 model
3. Note the **Endpoint URL**, **API Key**, and **Deployment Name**

#### Azure Cognitive Search (Optional)
1. Create an Azure Cognitive Search service
2. Create and populate a search index
3. Note the **Endpoint**, **API Key**, and **Index Name**

### 2. Application Configuration

1. Open `chat.html` in a web browser
2. Fill in the configuration form with your Azure service credentials:
   - **Azure Speech Resource**: Region and API Key
   - **Azure OpenAI Resource**: Endpoint, API Key, and Deployment Name
   - **STT/TTS Configuration**: Language settings and voice selection
   - **Avatar Configuration**: Character and style preferences

### 3. Running the Application

1. Simply open `chat.html` in your web browser
2. Configure your Azure services in the form
3. Click "Open Avatar Session" to start
4. The microphone will auto-start (if enabled) and you can begin speaking

## Configuration Options

### Speech Settings
- **STT Locales**: Supported languages for speech recognition
- **TTS Voice**: Voice selection for text-to-speech synthesis
- **Continuous Conversation**: Keep microphone active for ongoing dialogue
- **Auto-start Microphone**: Automatically activate microphone when session opens

### Avatar Settings
- **Character**: Choose from available avatar characters (e.g., "meg")
- **Style**: Select avatar style (e.g., "formal", "casual")

### AI Settings
- **System Prompt**: Customize the AI's personality and behavior
- **On Your Data**: Enable Azure Cognitive Search integration

## Key Features Explained

### Auto-start Microphone
- Automatically activates microphone 1 second after avatar session starts
- Can be disabled via checkbox in configuration
- Provides visual feedback in chat history
- Supports both continuous and single conversation modes

### Continuous Conversation Mode
- Keeps microphone active for ongoing dialogue
- No need to click buttons between questions
- Ideal for natural, flowing conversations

### Testing Tools
- **Test Microphone**: Verify speech recognition functionality
- **Test Audio Levels**: Check microphone input levels
- Built-in permission checking and troubleshooting

### Modern UI Design
- Gradient backgrounds and modern styling
- Responsive design for mobile and desktop
- Real-time visual feedback during speech recognition
- Overlay chat history on avatar video

## Browser Support

- **Chrome** ✅ Fully supported
- **Firefox** ✅ Fully supported  
- **Edge** ✅ Fully supported
- **Safari** ✅ Supported (may require HTTPS)

## Security Considerations

- API keys are entered client-side (consider server-side storage for production)
- Microphone permissions required for speech recognition
- HTTPS recommended for production deployment
- Consider implementing authentication for production use

## Troubleshooting

### Common Issues

1. **Microphone not working**
   - Check browser permissions
   - Use the "Test Microphone" button
   - Ensure microphone is not used by other applications

2. **Avatar not appearing**
   - Verify Azure Speech Service credentials
   - Check browser console for error messages
   - Ensure stable internet connection

3. **No speech recognition**
   - Verify microphone permissions
   - Check audio levels with "Test Audio Levels"
   - Ensure correct language settings

4. **OpenAI API errors**
   - Verify API key and endpoint
   - Check deployment name spelling
   - Ensure sufficient API quota

### Debug Information

The application provides extensive console logging:
- Speech recognition events
- Avatar connection status
- API call results
- Error messages with details

## Development

### File Structure
- `chat.js`: Core functionality, avatar management, speech processing
- `config.js`: Default configurations and settings management
- `microphone-tests.js`: Isolated testing utilities
- `style.css`: Modern responsive styling
- `chat.html`: Main interface and component structure

### Adding New Features
1. Speech-related features: Add to `microphone-tests.js`
2. Core functionality: Modify `chat.js`
3. UI changes: Update `style.css` and `chat.html`
4. Configuration: Extend `config.js`

## Performance Optimization

- Lazy loading of avatar components
- Efficient speech recognition event handling
- Optimized CSS for smooth animations
- Background processes for seamless user experience

## License

This project is provided as-is for educational and development purposes.

## Support

For issues and questions:
1. Check browser console for error messages
2. Verify Azure service configurations
3. Test microphone and audio settings
4. Review Azure service quotas and billing

---

**Last Updated**: June 2025
**Version**: 2.0.0

