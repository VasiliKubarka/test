import { MoleculesModule } from './molecules.module';

describe('MoleculesModule', () => {
  let moleculesModule: MoleculesModule;

  beforeEach(() => {
    moleculesModule = new MoleculesModule();
  });

  it('should create an instance', () => {
    expect(moleculesModule).toBeTruthy();
  });
});
