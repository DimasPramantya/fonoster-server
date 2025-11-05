// Import the default export from the SDK module
import SDK from "@fonoster/sdk";

// Wrap your logic in an async function to use await
(async () => {
  try {
    // Replace these with your values
    const client = new SDK.Client({
      accessKeyId: "verifcontact",
      endpoint: "localhost:8449",
      allowInsecure: true
    });

    // Use your actual username and password here
    await client.login("admin@fonoster.local", "verifcontact");
    console.log("Login successful!");

    const apikeys = new SDK.ApiKeys(client);

    const result = await apikeys.createApiKey({
      name: "MyNewKey", // It's good practice to give keys a name
      role: "WORKSPACE_ADMIN",
    });
    
    console.log("API Key created successfully:");
    console.log(result);

  } catch (error) {
    console.error("An error occurred:", error);
  }
})();