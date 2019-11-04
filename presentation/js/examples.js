/*********************************************************************************************************
    JavaScript Validation
**********************************************************************************************************/
//Function to display Error Message
function displayError(elementID, errorMessage){
    document.getElementById(elementID).textContent = errorMessage;
}

//Function to validate form
function validation() {
    //Get data from form elements
    var name = document.JavascriptValidation.txtName1;
    var email1 = document.JavascriptValidation.txtEmail1;
    var numAge = document.JavascriptValidation.txtNum;
    var validDate = document.JavascriptValidation.txtDate1;

    //Assign default value to error variables
    var erName = erEmail = erNum = erDate = true;

    //validate name
    if(name.value == ""){
        displayError("erName", "This is a required field.");
        name.style.border  = "2px solid #900";
    } else {
        var name_regex = /^[a-zA-Z\s]+$/;
        if (name_regex.test(name.value) === false){
            displayError("erName", "Enter a valid name.");
            name.style.border  = "2px solid #900";
        } else {
            displayError("erName", "");
            name.style.border  = "2px solid #00ff00";
            erName = false;
        }
    }

    //Validate Email
    if(email1.value == ""){
        displayError("erEmail", "This is a required field.");
        email1.style.border  = "2px solid #900";
    } else {
        //Regex for a basic email
        var email_regex = /^\S+@\S+\.\S+$/;
        if (email_regex.test(email1.value) === false){
            displayError("erEmail", "Enter a valid Email Address.");
            email1.style.border  = "2px solid #900";
        } else {
            displayError("erEmail", "");
            email1.style.border  = "2px solid #00ff00";
            erEmail = false;
        }
    }

    //Validate Age
    if(numAge.value == ""){
        displayError("erNum", "This is a required field.");
        numAge.style.border  = "2px solid #900";
    } else {
        //Regex for a basic email
        var age_regex = /^\d+$/;
        if (age_regex.test(numAge.value) === false){
            displayError("erNum", "Enter a valid Age.");
            numAge.style.border  = "2px solid #900";
        } else {
            displayError("erNum", "");
            numAge.style.border  = "2px solid #00ff00";
            erNum = false;
        }
    }

    //Validate Date (MM/dd/yyyy)
    if(validDate.value == ""){
        displayError("erDate", "This is a required field.");
        validDate.style.border  = "2px solid #900";
    } else {
        //Regex for a basic email
        var date_regex = /^((0?[1-9]|1[012])[-/.](0?[1-9]|[12][0-9]|3[01])[-/.](19|20)?[0-9]{2})*$/;
        if (date_regex.test(validDate.value) === false){
            displayError("erDate", "Enter a valid Date.");
            validDate.style.border  = "2px solid #900";
        } else {
            displayError("erDate", "");
            validDate.style.border  = "2px solid #00ff00";
            erDate = false;
        }
    }

    //Prevent form submission if there is any error
    if((erName || erEmail || erNum || erDate) == true){
        return false;
    } else {
        //Create a string from input data for preview
        var dataPreview = "You have entered the following information: \n" + "Name: " + name.value + "\n" + "Email Address: " + email1.value + "\n" + "Age: " + numAge.value + "\n" + "Date: " + validDate.value;
        alert(dataPreview);
    }
}

/*********************************************************************************************************
    JavaScript Constraint API
**********************************************************************************************************/
var forms = document.querySelectorAll('.validate');
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}

// Validate the field
var hasError = function (field) {
    // Don't validate submits, buttons, file and reset inputs, and disabled fields
    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button')
        return;

    // Get validity
    var validity = field.validity;

    // If valid, return null
    if (validity.valid) 
        return;

    // If field is required and empty
    if (validity.valueMissing) 
        return 'Please fill out this field.';

    // If not the right type
    if (validity.typeMismatch) {
        // Email
        if (field.type === 'email') 
            return 'Please enter a valid email address.';

        // URL
        if (field.type === 'url') 
            return 'Please enter a URL.';
    }

    // If too short
    if (validity.tooShort) 
        return 'Please lengthen this text to ' + field.getAttribute('minLength') + ' characters or more. You are currently using ' + field.value.length + ' characters.';

    // If too long
    if (validity.tooLong) 
        return 'Please shorten this text to no more than ' + field.getAttribute('maxLength') + ' characters. You are currently using ' + field.value.length + ' characters.';

    // If number input isn't a number
    if (validity.badInput) 
        return 'Please enter a number.';

    // If a number value doesn't match the step interval
    if (validity.stepMismatch) 
        return 'Please select a valid value.';

    // If a number field is over the max
    if (validity.rangeOverflow) 
        return 'Please select a value that is no more than ' + field.getAttribute('max') + '.';

    // If a number field is below the min
    if (validity.rangeUnderflow) 
        return 'Please select a value that is no less than ' + field.getAttribute('min') + '.';

    // If pattern doesn't match
    if (validity.patternMismatch) {
        // If pattern info is included, return custom error
        if (field.hasAttribute('title')) 
            return field.getAttribute('title');

        // Otherwise, generic error
        return 'Please match the requested format.';

    }
    // If all else fails, return a generic catchall error
    return 'The value you entered for this field is invalid.';
};

// Show the error message
var showError = function (field, error) {
   // Add error class to field
   field.classList.add('error');
  
   // If the field is a radio button and part of a group, error all and get the last item in the group
   if (field.type === 'radio' && field.name) {
       var group = document.getElementsByName(field.name);
       if (group.length > 0) {
           for (var i = 0; i < group.length; i++) {
               // Only check fields in current form
               if (group[i].form !== field.name) continue;
               group[i].classList.add('error');
           }
           field = group[group.length - 1];
       }
   }

   // Get field id or name
   var id = field.id || field.name;
   if (!id) return;

   // Check if error message field already exists
   // If not, create one
   var message = field.form.querySelector('.error-message#error-for-' + id );
   if (!message) {
       message = document.createElement('div');
       message.className = 'error-message';
       message.id = 'error-for-' + id;
       
       // If the field is a radio button or checkbox, insert error after the label
       var label;
       if (field.type === 'radio' || field.type ==='checkbox') {
           label = field.form.querySelector('label[for="' + id + '"]') || field.parentNode;
           if (label) {
               label.parentNode.insertBefore( message, label.nextSibling );
           }
       }

       // Otherwise, insert it after the field
       if (!label) {
           field.parentNode.insertBefore( message, field.nextSibling );
       }

   }
   
   // Add ARIA role to the field
   field.setAttribute('aria-describedby', 'error-for-' + id);

   // Update error message
   message.innerHTML = error;

   // Show error message
   message.style.display = 'block';
   message.style.visibility = 'visible';
};

// Remove the error message
var removeError = function (field) {
    // Remove error class to field
    field.classList.remove('error');

    // Remove ARIA role from the field
    field.removeAttribute('aria-describedby');

    // Get field id or name
    var id = field.id || field.name;
    if (!id) return;

    // Check if an error message is in the DOM
    var message = field.form.querySelector('.error-message#error-for-' + id + '');
    if (!message) return;

    // If so, hide it
    message.innerHTML = '';
    message.style.display = 'none';
    message.style.visibility = 'hidden';
};

// Listen to all blur events
document.addEventListener('blur', function (event) {
    /// Only run if the field is in a form to be validated
    if (!event.target.form.classList.contains('validate')) 
        return;

    // Validate the field
    //var error = event.target.validity;
    var error = hasError(event.target);

    // If there's an error, show it
    if (error) {
        showError(event.target, error);
        return;
    }

    // Otherwise, remove any existing error message
    removeError(event.target);
}, true);

// Check all fields on submit
document.addEventListener('submit', function (event) {

    // Only run on forms flagged for validation
    if (!event.target.classList.contains('validate')) return;

    // Get all of the form elements
    var fields = event.target.elements;

    // Validate each field
    // Store the first field with an error to a variable so we can bring it into focus later
    var error, hasErrors;
    for (var i = 0; i < fields.length; i++) {
        error = hasError(fields[i]);
        if (error) {
            showError(fields[i], error);
            if (!hasErrors) {
                hasErrors = fields[i];
            }
        }
    }

    // If there are errrors, don't submit form and focus on first element with error
    if (hasErrors) {
        event.preventDefault();
        hasErrors.focus();
    }

    // Otherwise, let the form submit normally
    // You could also bolt in an Ajax form submit process here

}, false);