export const banneQuery = {
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

export const communityMeetupQuery = {
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

export const workQuery = {
  query: `
    query MyQuery {
      work {
        id
        icon
        heading
        description
      }
    }
    `,
};

export const sourceProductQuery = {
  query: `query MyQuery {
        sourceProducts {
          description
          heading
          icon
          id
        }
      }
      `,
};

export const communitiesQuery = {
  query: `query MyQuery {
    communities {
      bgColor
      icon
      name
      id
    }
  }
   `,
};

export const insightsQuery = {
  query: `query MyQuery {
    insights {
      description
      date
      id
      image
      title
    }
  }
  
   `,
};
