export const fetchData = async (requestBody: any) => {
  const response = await fetch(
    "https://resolved-reptile-53.hasura.app/v1/graphql",
    {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
          "xqaG3avDgO7ObnjMv5Pa1VfDcJEFNfiSXcLCZZUP3lpf0Rrb6mggvl2gjXOXgWq8",
      },
    }
  );
  const result = await response.json();
  return result;
};
