// Configuration file for default values
const config = {  // Azure Speech Resource
  speechService: {
    region: '<your-region>', // Default region
    apiKey: '<your-api-key>', // Leave empty for security, or set default if needed
    privateEndpoint: '' // Leave empty to use standard endpoint
  },
  
  // Azure OpenAI Resource
  openAI: {
    endpoint: 'https://<your-custom-endpoint>.openai.azure.com', // Default endpoint
    apiKey: '<your-api-key>', // Leave empty for security
    deploymentName: '<your-deployment-name>', // Default deployment name
    systemPrompt: 'You are an AI assistant that helps people find information.'
  },
  
  // Azure Cognitive Search (for On Your Data)
  cognitiveSearch: {
    endpoint: '',
    apiKey: '',
    indexName: ''
  },
  
  // STT/TTS Configuration
  speech: {
    sttLocales: 'en-US,de-DE,es-ES,fr-FR,it-IT,ja-JP,ko-KR,zh-CN',
    ttsVoice: 'en-US-AvaMultilingualNeural'
  },
  
  // Avatar Configuration
  avatar: {
    character: 'meg',
    style: 'formal'
  }
};

// Function to load default values into form fields
function loadDefaultConfig() {
  // Speech Service
  document.getElementById('region').value = config.speechService.region;
  document.getElementById('APIKey').value = config.speechService.apiKey;
  document.getElementById('privateEndpoint').value = config.speechService.privateEndpoint;
  
  // OpenAI
  document.getElementById('azureOpenAIEndpoint').value = config.openAI.endpoint;
  document.getElementById('azureOpenAIApiKey').value = config.openAI.apiKey;
  document.getElementById('azureOpenAIDeploymentName').value = config.openAI.deploymentName;
  document.getElementById('prompt').value = config.openAI.systemPrompt;
  
  // Cognitive Search
  document.getElementById('azureCogSearchEndpoint').value = config.cognitiveSearch.endpoint;
  document.getElementById('azureCogSearchApiKey').value = config.cognitiveSearch.apiKey;
  document.getElementById('azureCogSearchIndexName').value = config.cognitiveSearch.indexName;
  
  // Speech
  document.getElementById('sttLocales').value = config.speech.sttLocales;
  document.getElementById('ttsVoice').value = config.speech.ttsVoice;
    // Avatar
  document.getElementById('talkingAvatarCharacter').value = config.avatar.character;
  document.getElementById('talkingAvatarStyle').value = config.avatar.style;
    // Enable continuous conversation by default
  document.getElementById('continuousConversation').checked = true;
  
  // Enable auto-start microphone by default
  document.getElementById('autoStartMicrophone').checked = true;
}

// Function to get current configuration from form
function getCurrentConfig() {
  return {
    speechService: {
      region: document.getElementById('region').value,
      apiKey: document.getElementById('APIKey').value,
      privateEndpoint: document.getElementById('privateEndpoint').value
    },
    openAI: {
      endpoint: document.getElementById('azureOpenAIEndpoint').value,
      apiKey: document.getElementById('azureOpenAIApiKey').value,
      deploymentName: document.getElementById('azureOpenAIDeploymentName').value,
      systemPrompt: document.getElementById('prompt').value
    },
    cognitiveSearch: {
      endpoint: document.getElementById('azureCogSearchEndpoint').value,
      apiKey: document.getElementById('azureCogSearchApiKey').value,
      indexName: document.getElementById('azureCogSearchIndexName').value
    },
    speech: {
      sttLocales: document.getElementById('sttLocales').value,
      ttsVoice: document.getElementById('ttsVoice').value
    },
    avatar: {
      character: document.getElementById('talkingAvatarCharacter').value,
      style: document.getElementById('talkingAvatarStyle').value
    }
  };
}

function loadConfigFromLocal() {
  const savedConfig = localStorage.getItem('azureAIAvatarConfig');
  if (savedConfig) {
    const parsedConfig = JSON.parse(savedConfig);
    
    // Load saved values into form fields
    document.getElementById('region').value = parsedConfig.speechService.region || config.speechService.region;
    document.getElementById('APIKey').value = parsedConfig.speechService.apiKey || '';
    document.getElementById('privateEndpoint').value = parsedConfig.speechService.privateEndpoint || '';
    
    document.getElementById('azureOpenAIEndpoint').value = parsedConfig.openAI.endpoint || '';
    document.getElementById('azureOpenAIApiKey').value = parsedConfig.openAI.apiKey || '';
    document.getElementById('azureOpenAIDeploymentName').value = parsedConfig.openAI.deploymentName || config.openAI.deploymentName;
    document.getElementById('prompt').value = parsedConfig.openAI.systemPrompt || config.openAI.systemPrompt;
    
    document.getElementById('azureCogSearchEndpoint').value = parsedConfig.cognitiveSearch.endpoint || '';
    document.getElementById('azureCogSearchApiKey').value = parsedConfig.cognitiveSearch.apiKey || '';
    document.getElementById('azureCogSearchIndexName').value = parsedConfig.cognitiveSearch.indexName || '';
    
    document.getElementById('sttLocales').value = parsedConfig.speech.sttLocales || config.speech.sttLocales;
    document.getElementById('ttsVoice').value = parsedConfig.speech.ttsVoice || config.speech.ttsVoice;
    
    document.getElementById('talkingAvatarCharacter').value = parsedConfig.avatar.character || config.avatar.character;
    document.getElementById('talkingAvatarStyle').value = parsedConfig.avatar.style || config.avatar.style;
    
    alert('Configuration loaded from local storage!');
  } else {
    alert('No saved configuration found in local storage.');
  }
}

// Additional functions for local storage
function saveConfigToLocal() {
  const currentConfig = getCurrentConfig();
  localStorage.setItem('azureAIAvatarConfig', JSON.stringify(currentConfig));
  alert('Configuration saved to local storage!');
}
