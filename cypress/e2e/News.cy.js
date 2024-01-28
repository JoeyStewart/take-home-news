describe('Get request for the APP', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=676dc2532ad3454b8903fce9bd2bc8a5', 
    {fixture: 'AllCards.json'}
    ).as('getAllCards')
    cy.visit('http://localhost:3000/')
  })

  it('Should intercept and stub the API upon initial load and identify the cards', () => {
    cy.get('h1').should('contain', 'The News Dot Com')
    cy.get('input').should('be.visible')
    cy.get('.date').should('have.length', 100)
    cy.get('.card:first').should('contain', "This Is What $10 Million Vacation Looks Like...")
    cy.get('.card:first').should('contain', '2024-01-26')
    cy.get('[name="article"]').should('have.value', '')
  })

  it('Should see last card', () => {
    cy.get('h1').should('contain', 'The News Dot Com')
    cy.get('input').should('be.visible')
    cy.get('.date').should('have.length', 100)
    cy.get('.card:last').should('contain', "Defense Secretary Lloyd Austin Has Prostate Cancer, Pentagon Says")
    cy.get('.card:last').should('contain', 'Urinary-tract infection prompted return to hospital, a move not shared with White House for three days')
    cy.get('.card:last').should('contain', '2024-01-09')
    cy.get('[name="article"]').should('have.value', '')
    cy.get('.article-input').click()
    cy.get('[name="article"]').type("Twitter's Old Logos")
    cy.scrollTo('bottom');
    cy.intercept(
      'GET',
      "https://newsapi.org/v2/everything?q=Twitter%27s%20Old%20Logos%20And%20Office%20Relics%20Find%20New%20Life%20As%20Home%20Decor&domains=wsj.com&apiKey=676dc2532ad3454b8903fce9bd2bc8a5",      
      { fixture: 'SingleCard.json' }
    ).as('getSingleCard');
    cy.get('.card:last').click()
    cy.wait('@getSingleCard')
    cy.get('h1').should('contain', 'The News Dot Com')
    cy.get('.single-title').should('contain',"Twitter's Old Logos And Office Relics Find New Life As Home Decor")
    cy.get('.news-details').should('contain', 'Author: Alexa Corse')
    cy.get('.news-details').should('contain', '2024-01-16')
    cy.get('.news-details').should('contain', 'SAN FRANCISCOBidding on a nearly 6-foot-tall statue of a hashtag that was being auctioned off from the longtime Twitter headquarters seemed like a fun idea to former Twitter data scientist Lauren Fra… [+416 chars]')
    cy.get('.news-details').should('contain', 'Click to Read the Full Article!')
  })
})