describe('api test', () => {
  it('should return 200 + text', (done) => {
    request.get('/api/getPost')
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text.length).to.not.be.equal(0);
      done();
    })
  });
})
