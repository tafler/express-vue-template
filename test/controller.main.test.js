describe('test api main page', () => {
  it('we wait homepage', (done) => {
    request.get('/')
    .end((err, res) => {
      expect(res).to.have.status(200);
      // expect(res.text).to.be.a('string');
      // expect(res.text.length).to.not.be.equal(0);
      done();
    })
  })
})
