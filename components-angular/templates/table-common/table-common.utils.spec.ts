import {
  createFilterByInputValue, createFilterBySelectMultiple,
} from '@app/shared/components/templates/table-common/table-common.utils';


describe('TableCommonComponent utils functions', () => {

  const data = {
    firstField: 'some',
    secondField: 'any',
  };


  it('createFilterByInputValue should return TRUE when no filters', () => {
    const filters = {
      firstField: '',
      secondField: '',
    };
    const column = {
      value: 'firstField',
      label: '',
      control_type: 'textbox',
    };

    expect(createFilterByInputValue(filters)(column)(data)).toBeTruthy();
  });

  it('createFilterByInputValue should return TRUE when data has filter value', () => {
    const filters = {
      firstField: 'som',
      secondField: '',
    };
    const column = {
      value: 'firstField',
      label: '',
      control_type: 'textbox',
    };

    expect(createFilterByInputValue(filters)(column)(data)).toBeTruthy();
  });

  it('createFilterByInputValue should return FALSE when data has not filter value', () => {
    const filters = {
      firstField: 'aa',
      secondField: '',
    };
    const column = {
      value: 'firstField',
      label: '',
      control_type: 'textbox',
    };

    expect(createFilterByInputValue(filters)(column)(data)).toBeFalsy();
  });

  it('createFilterBySelectMultiple should return TRUE when no filters ', () => {
    const filters = {
      firstField: [],
      secondField: '',
    };
    const column = {
      value: 'firstField',
      label: '',
      control_type: 'textbox',
    };

    expect(createFilterBySelectMultiple(filters)(column)(data)).toBeTruthy();
  });

  it('createFilterBySelectMultiple should return TRUE when filter array includes filed data', () => {
    const filters = {
      firstField: ['some', 'aa'],
      secondField: '',
    };
    const column = {
      value: 'firstField',
      label: '',
      control_type: 'textbox',
    };

    expect(createFilterBySelectMultiple(filters)(column)(data)).toBeTruthy();
  });

  it('createFilterBySelectMultiple should return FALSE when filter array not includes field data', () => {
    const filters = {
      firstField: ['aa'],
      secondField: '',
    };
    const column = {
      value: 'firstField',
      label: '',
      control_type: 'textbox',
    };

    expect(createFilterBySelectMultiple(filters)(column)(data)).toBeFalsy();
  });

});
