import $ from 'jquery'

describe('Repair Desk Test Suite', function () {

  it('Go to Repair Desk site', {
    retries: {
      openMode: 2,
    },
  },
    function () {
      cy.visit('https://app-qa.remotesf.com/login')
      cy.get('#email').type('saad.usmani@tkxel.io')
      cy.get('#password').type('Asd@7867')
      cy.get('.btn').click()
    })

    it('Click on Customer View Details', function () {
      cy.wait(5000)
      cy.get(':nth-child(1) > div > .job-list-hover a').click({ force: true })
      
    })

  Cypress.Cookies.defaults({
    preserve: 'ucfy',
  })

  it('Click on Sell Products, Validate that you are on All Products section', function () {
    cy.get('#sellProduct').click()
    cy.get('.active > .f14').should('contain', 'All Products')
    cy.get(':nth-child(2) > .product > .pt-2 > .product-title').click()
  })

  it('Get product quantity and store it, click checkout', function () {
    cy.get('.row > :nth-child(3) > .f14').then(($qty) => {
      const txt = $qty.text()
      expect($qty.text()).to.eq(txt)
    })

  })

 /* it('Click on Checkout and then click CASH option', function () {
    //cy.get('#Checkout').click()
    cy.reload()
    cy.get('#Checkout').click()
    cy.get('.payment-mode').click()

  })

  it('Perform Checkout process', function () {
    cy.get('.suggested-amount > :nth-child(1)').click()
    cy.wait(5000)
    cy.reload()
    cy.get('#Checkout').click()
    cy.get('.payment-mode').click()
    cy.get('.suggested-amount > :nth-child(1)').click()
    cy.focused().get('.payment-confirm-btn').click()
    cy.wait(5000)

  })

  it('Open Invoice in the same tab and verify the name of product, price, tax and total.', function () {
    cy.get(':nth-child(7) > .actionn-box').invoke('attr', 'href').then(myLink => {
      cy.visit('https://app.repaircrm.co/index.php?r=nux/invoice/index#/viewInvoice/4472554')
    })
    cy.wait(5000)
    cy.reload()
    cy.get('.el-tag-grey').then(($id) => {
      const txt = $id.text()
      const id = txt.toString().split("ID: ")[1]

      cy.get('.el-row > :nth-child(1) > div > .w-full').should('contain', 'Paid')
      cy.get('.py-4 > :nth-child(2) > .f16').should('contain', '$90.00')
      cy.get(':nth-child(4) > div > .f16').should('contain', '$14.40')
      cy.get(':nth-child(4) > .t-value > span').should('contain', '$104.40')
      cy.get('#POS').click()
      cy.get('#issue_refund_button').click()
      cy.get('#refundableInvoiceSearch').type(id)
      cy.wait(5000)
      cy.get('.suggestion').click()
    })
  })*/
})