import { ReversePipe } from "./reverse.pipe";


describe('UserComponent', () => {

  it('should return olleh', () => {
      let reversePipe = new ReversePipe();
      expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
