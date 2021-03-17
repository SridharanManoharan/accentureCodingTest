/**
 * Gets the processing page
 * @param {array} data
 */
async function getProcessingPage(data) {
  for (const currentState of data) {
    try {
      if (currentState.state === "processing") {
        console.log("Waiting for processing....");
        await sleep(2000);
      } else if (currentState.state === "error") {
        await handleError(currentState);
      } else if (currentState.state === "success") {
        await handleSuccess();
      }
    } catch (error) {
      await handleError(currentState);
    }
  }
}

/**
 * Function to handle error scenarios
 * @param {object} currentState
 */
async function handleError(currentState) {
  const { errorCode } = await currentState;
  let errorMessage = {
    title: "Error page",
    message: null,
  };
  if (errorCode) {
    if (errorCode === "NO_STOCK") {
      errorMessage.message = "No stock has been found";
    } else if (errorCode === "INCORRECT_DETAILS") {
      errorMessage.message = "Incorrect details have been entered";
    }
  }
  console.error(errorMessage);
}

/**
 * Function to handle success scenarios
 */
async function handleSuccess() {
  const successMessage = { title: "Order complete", message: null };
  console.log(successMessage);
}

/**
 * Util function for settimeout
 * @param {long} ms
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Calling getProcessingPage function
 * @param {array[object]}
 * 
 * Note: For specific error the object should have @property errorCode
 * and errorCode can be ["INCORRECT_DETAILS" | "NO_STOCK"]
 */
getProcessingPage([
  { state: "error", errorCode: "INCORRECT_DETAILS" },
  { state: "processing" },
  { state: "success" },
  { state: "processing" },
  { state: "error", errorCode: "NO_STOCK" },
]);
