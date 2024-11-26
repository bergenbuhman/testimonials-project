describe("testimonials", () => {
	it("lists testimonials", () => {
		cy.visit("localhost/testimonials-project");

		cy.get("h1").should("have.text", "Testimonials").should("be.visible");

		cy.get("ul[name=testimonials-list]").should("be.visible");
	});
});
