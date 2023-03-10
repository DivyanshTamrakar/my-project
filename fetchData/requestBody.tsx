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
    whatWeDo {
      buttonText
      subheading
      services
      heading
    }
  }
  
    `,
};

export const sourceProductQuery = {
  query: `query MyQuery {
    productsAndOpensource {
      buttonText
      heading
      products
      subheading
    }
  }
      `,
};

export const insightsQuery = {
  query: `query MyQuery {
    Insights {
      buttonText
      heading
      insightData
      subheading
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
      engagement
      id
      quicklinks
      awards
      addresses
      socialConnect
      hireDevelopersComponent
      image
      subheading
      certificate
      copyright
    }
  }
  
   `,
};

export const trustedPartnerQuery = {
  query: `query MyQuery {
    trustedPartner {
      buttonText
      heading
      id
      partners
      subheading
    }
  }`,
};

export const techWeLoveQuery = {
  query: `query MyQuery {
    techWeLove {
      buttonText
      heading
      subheading
      categories
      id
      top
      mobile
      testing
      web
      design
      backend
    }
  }`,
};
