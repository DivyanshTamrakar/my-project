export const bannerData = async () => {
  let requestBody = {
    query: `
    query MyQuery {
      ban_ner {
        id
        options
        header
        button
        subheading
      }
    }
    
    `,
  };
  const bannerResponse = await fetch(
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
  const banner = await bannerResponse.json();
  return banner;
};

export const communityMeetupData = async () => {
  let communityMeetup = {
    query: `
        query MyQuery {
          community_meetups {
            url
            title
            description
            date
          }
        }`,
  };

  const communityMeetupResponse = await fetch(
    "https://resolved-reptile-53.hasura.app/v1/graphql",
    {
      method: "POST",
      body: JSON.stringify(communityMeetup),
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
          "xqaG3avDgO7ObnjMv5Pa1VfDcJEFNfiSXcLCZZUP3lpf0Rrb6mggvl2gjXOXgWq8",
      },
    }
  );
  const communityResult = await communityMeetupResponse.json();
  return communityResult;
};
