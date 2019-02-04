describe('api test', () => {
  it('should return 200 + text', (done) => {
    request.get('/api/getPost')
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text.length).to.not.be.equal(0);
      done();
    })
    .catch(err => {
      done(err)
    })
  });
})
