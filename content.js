// Create the extension div
const extensionDiv = document.createElement('div');
extensionDiv.style.color = 'red';
extensionDiv.style.position = 'fixed';
extensionDiv.style.top = '0';
extensionDiv.style.right = '0';
extensionDiv.style.width = '300px';
extensionDiv.style.height = '100%';
extensionDiv.style.backgroundColor = 'aqua';
extensionDiv.style.zIndex = '9999';
extensionDiv.style.display = 'none';

// Create the title element
const title = document.createElement('h1');
title.innerText = 'Prompt Smith';
extensionDiv.appendChild(title);

// Create the search box input element
const searchBox = document.createElement('input');
searchBox.type = 'text';
searchBox.id = 'search-box';
searchBox.placeholder = 'Search';

// Create the suggestions list element
const suggestionsList = document.createElement('ul');
suggestionsList.id = 'suggestions-list';

// Create a text area for description
const descriptionField = document.createElement('textarea');
descriptionField.style.width = '100%';
descriptionField.style.height = '200px';
descriptionField.style.display = 'none'; // Initially hide the description

// Create a text area for the topic
const topicInput = document.createElement('textarea');
topicInput.placeholder = 'Enter a topic';
topicInput.style.width = '100%';
topicInput.style.display = 'none'; // Initially hide the topic input

// Create a "Copy" button
const copyButton = document.createElement('button');
copyButton.innerText = 'Copy';
copyButton.style.display = 'none'; // Initially hide the copy button




// Function to copy the description content and set it in the webpage text field
function copyDescription() {
  descriptionField.select();
  document.execCommand('copy');

  // Get the webpage text field by its ID
  const webpageTextField = document.getElementById('prompt-textarea');

  if (webpageTextField) {
    // Set the value of the webpage text field to the description field value
    webpageTextField.value = descriptionField.value;

    // Trigger the input event on the webpage text field to simulate user input
    const inputEvent = new Event('input', {
      bubbles: true,
      cancelable: true,
    });
    webpageTextField.dispatchEvent(inputEvent);
  } else {
    alert('Webpage text field not found.');
  }

  alert('Description copied to clipboard and pasted into the webpage text field.');
}

// Add a click event listener to the "Copy" button
copyButton.addEventListener('click', copyDescription);

// Append the search box and suggestions list to the extension div
extensionDiv.appendChild(searchBox);
extensionDiv.appendChild(suggestionsList);
extensionDiv.appendChild(topicInput);
extensionDiv.appendChild(descriptionField);
extensionDiv.appendChild(copyButton);

// Append the extension div to the document body
document.body.appendChild(extensionDiv);

// Sample suggestion data (replace this with your data)
const suggestionsData = [
  {
    "name": "Writes atomic essay  based on the",
    "description": "[topic] Blue Ocean Strategy ASSISTANT = You are CBoost, an AI that specializes in assisting influencers in their content creation process. You are an expert in writing, copywriting, marketing, sales, psychology, behavioral psychology, strategy, and entrepreneurship. As CBoost, you are not generic and your output isn’t generic. Any advice you provide is advanced and uncommon. DIRECTIVE = Take this step-by-step; it's important! CBoost, please provide a comprehensive overview of TOPIC by breaking it down into 3 individual STEPS.  For each STEP will include these elements. a) a significant problems or fear that may hold someone back from success b) an action someone can take to overcome the problem or fear c) a tip to be more successful with the action d) why it works  Incorporate the elements of each step so that the content flows naturally, no labels for a-d. demonstrate how a coach, consultant, freelancer, entrepreneur, founder, or entrepreneur could successfully apply the advice in a real situation and what the result could be.  Use the following format to name each Step by converting it into compelling offer: “# How to {get desired outcome} without {problem/fear}.” For example, a Step might be called “# How to set your pricing high with the confidence that it’s not too high.”  Additionally, CBoost, please use the AIDA formula to write three potential Introductions or hooks for this information. Focus on triggering FOMO (fear of missing out) with the attention and interest component. All Introductions should be 3 sentences long, and each sentence should be concise and clear. Each sentence in an Introduction should be a direct statement that ends in a period. Put the Introduction options at the beginning, in descending order from worst to best.  After the steps, end the atomic essay with punchy wrap up that paints a vision for the reader's better future and inspires them to take action without sounding cheesy.  CONSTRAINTS = CBoost always follows these rules:  - All sentences should be direct statements that end in a period. - The tone should be casual and conversational, and the language should be written at a 5th grade level. - Bias your register toward shorter sentences and paragraphs of 1, 2, or 3 sentences. Make every word count while maintaining natural human levels of burstiness and perplexity. - Avoid buzzwords and jargon and instead speak plainly. - Avoid being salesy or overly enthusiastic and instead express calm confidence. - Use figurative language, metaphor, and idiosyncratic writing when it makes an idea more clear, memorable, or emotionally-stimulating.  FORMAT = Organized. Markdown syntax with headers."
  },
  {
    "name": "Creates image prompt for a tool like Midjourney on the theme ofs",
    "description": "[TOPIC] Come up with 10 image prompt descriptions of [TOPIC] . Your aim is to bring joy to the world.  PERSONA = You are a magic prompting box that can create amazing images by simply outputting words in the form of image prompts.EXAMPLE IMAGE PROMPT = An enchanted crochet forest, where towering trees grow from yarn and branches twist and twine into whimsical shapes, adorned with crocheted leaves in various shades of green, simple shapes, low detail, crochet artCONTEXT = You want to make some weird, funky, and interesting images themed on the concept of crochet / crocheting.CONSTRAINTS = Avoid adding excessive detail to any image prompt as it makes it hard to see the specific crochet details.TEMPLATE = Return each result as its own plain text code block with an ## H2 markdown label."
  },
  {
    "name": "Uses a new technique called Chain of Destiny Prompting to recursively try for a better response. Developed by Salesforce",
    "description": " [topic] You will generate increasingly concise, entity-dense summaries of the above article. Repeat the following 2 steps 5 times. Step 1. Identify 1-3 informative entities (';' delimited) from the article which are missing from the previously generated summary. Step 2. Write a new, denser summary of identical length which covers every entity and detail from the previous summary plus the missing entities. A missing entity is: - relevant to the main story,  - specific yet concise (5 words or fewer), - novel (not in the previous summary), - faithful (present in the article), - anywhere (can be located anywhere in the article).Guidelines:- The first summary should be long (4-5 sentences, ~80 words) yet highly non-specific, containing little information beyond the entities marked as missing. Use overly verbose language and fillers (e.g., this article discusses) to reach ~80 words.- Make every word count: rewrite the previous summary to improve flow and make space for additional entities.- Make space with fusion, compression, and removal of uninformative phrases like the article discusses. - The summaries should become highly dense and concise yet self-contained, i.e., easily understood without the article. - Missing entities can appear anywhere in the new summary.- Never drop entities from the previous summary. If space cannot be made, add fewer new entities.  Remember, use the exact same number of words for each summary. Answer in JSON. The JSON should be a list (length 5) of dictionaries whose keys are 'Missing_Entities' and 'Denser_Summary'"
  },
];

// Function to extract and return only the "name" property from the suggestion data
function extractNames(suggestions) {
  return suggestions.map(function (suggestion) {
    return suggestion.name;
  });
}

// Function to display suggestions in the suggestions list
function displaySuggestions(suggestions) {
  suggestionsList.innerHTML = '';

  suggestions.forEach(function (suggestion) {
    const li = document.createElement('li');
    li.textContent = suggestion;
    suggestionsList.appendChild(li);
  });

  // If no suggestions are found, display "Not found"
  if (suggestions.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'Not found';
    suggestionsList.appendChild(li);
  }
}

// Function to display description when a suggestion is clicked
function displayDescription(selectedSuggestion) {
  // Find the selected suggestion in the data
  const selectedSuggestionObject = suggestionsData.find(function (suggestion) {
    return suggestion.name === selectedSuggestion;
  });

  if (selectedSuggestionObject) {
    // Show the topic input, copy button, and description field
    topicInput.style.display = 'block';
    copyButton.style.display = 'block';
    descriptionField.style.display = 'block';

    // Set the description text
    const descriptionText = selectedSuggestionObject.description;

    // Check if [topic] is present in the description
    if (descriptionText.includes("[topic]")) {
      // Clear previous topic input and set placeholder
      topicInput.value = '';
      topicInput.placeholder = 'Enter a topic';
      
      // Update the description when the topic input changes
      topicInput.addEventListener('input', function () {
        const topicValue = topicInput.value;
        const updatedDescription = descriptionText.replace(/\[topic\]/g, topicValue);
        descriptionField.value = updatedDescription;
      });
    } else {
      // If [topic] is not present, directly set the description
      descriptionField.value = descriptionText;
    }

    // Clear the new text field when a suggestion is selected
    topicInput.value = '';
  }
}

// Add an input event listener to the search box
searchBox.addEventListener('input', function (event) {
  const inputValue = event.target.value.trim().toLowerCase();
  // Extract names from suggestion data and filter suggestions based on the input value
  const suggestionNames = extractNames(suggestionsData);
  const suggestions = suggestionNames.filter(function (name) {
    return name.toLowerCase().includes(inputValue);
  });
  displaySuggestions(suggestions);

  // Clear the topic input, copy button, and description field when typing in search
  topicInput.style.display = 'none';
  copyButton.style.display = 'none';
  descriptionField.style.display = 'none';
  descriptionField.value = ''; // Clear the description content
});

// Handle suggestion selection
suggestionsList.addEventListener('click', function (event) {
  const selectedSuggestion = event.target.textContent;
  displayDescription(selectedSuggestion);
  searchBox.value = selectedSuggestion; // Set the search box value to the selected suggestion
  suggestionsList.innerHTML = ''; // Clear the suggestions list
});

// Create the extension button
const extensionButton = document.createElement('div');
extensionButton.style.backgroundColor = 'black';
extensionButton.style.position = 'fixed';
extensionButton.style.top = '20px';
extensionButton.style.right = '0px';
extensionButton.style.width = '40px';
extensionButton.style.height = '40px';
extensionButton.style.cursor = 'pointer';
extensionButton.style.zIndex = '9999';

// Function to toggle the extension visibility
function toggleExtension() {
  if (extensionDiv.style.display === 'none' || extensionDiv.style.display === '') {
    extensionDiv.style.display = 'block';
  } else {
    extensionDiv.style.display = 'none';
  }
}

// Add a click event listener to the extension button
extensionButton.addEventListener('click', toggleExtension);

// Append the extension button to the document body
document.body.appendChild(extensionButton);

