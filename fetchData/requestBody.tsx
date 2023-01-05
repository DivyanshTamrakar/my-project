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
    communityMeetup {
      meetups
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

export const communitiQuery = {
  query: `query MyQuery {
    communities {
      communities
      id
    }
  }
  
  
   `,
};

export const footerQuery = {
  query: `query MyQuery {
    footer {
      company
      enagagement
      hireDevelopers
      id
      quickLinks
      awards
      addresses
      socialIcons
    }
  }
  
   `,
};
