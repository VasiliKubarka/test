import { AtomsModule } from './atoms.module';

describe('AtomsModule', () => {
  let atomsModule: AtomsModule;

  beforeEach(() => {
    atomsModule = new AtomsModule();
  });

  it('should create an instance', () => {
    expect(atomsModule).toBeTruthy();
  });
});
