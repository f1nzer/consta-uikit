import { getColumnLeftOffset, getColumnsSize, getNewSorting } from '../helpers';

describe('getColumnsSize', () => {
  it('получение размера колонок', () => {
    const result = getColumnsSize([150, undefined]);

    expect(result).toEqual('150px minmax(min-content, 1fr)');
  });
});

describe('getColumnLeftOffset', () => {
  it('получение отступа слева от колонки, если размеры колонок отсутствуют', () => {
    const result = getColumnLeftOffset({
      columnIndex: 0,
      resizedColumnWidths: [],
      initialColumnWidths: [],
    });

    expect(result).toEqual(0);
  });

  it('получение отступа слева от колонки, если у колонки не изменялся размер', () => {
    const result = getColumnLeftOffset({
      columnIndex: 1,
      resizedColumnWidths: [],
      initialColumnWidths: [100],
    });

    expect(result).toEqual(100);
  });

  it('получение отступа слева от колонки, если у колонки изменялся размер', () => {
    const result = getColumnLeftOffset({
      columnIndex: 1,
      resizedColumnWidths: [200],
      initialColumnWidths: [100],
    });

    expect(result).toEqual(200);
  });

  it('получение отступа слева от колонки, если не у всех колонок до выбранной изменялся размер', () => {
    const result = getColumnLeftOffset({
      columnIndex: 3,
      resizedColumnWidths: [200, undefined, 300],
      initialColumnWidths: [100, 100, 100],
    });

    expect(result).toEqual(600);
  });
});

describe('getNewSorting', () => {
  it('устанавливает сортировку по полю, если не было сортировки', () => {
    expect(getNewSorting(null, 'field')).toEqual({
      by: 'field',
      order: 'asc',
    });
  });

  it('устанавливает сортировку по полю, если было отсортировано по другому полю', () => {
    const result = getNewSorting({ by: 'anotherField', order: 'asc' }, 'field');

    expect(result).toEqual({
      by: 'field',
      order: 'asc',
    });
  });

  it('устанавливает сортировку по убыванию, если было отсортировано по возрастанию', () => {
    const result = getNewSorting({ by: 'field', order: 'asc' }, 'field');

    expect(result).toEqual({
      by: 'field',
      order: 'desc',
    });
  });

  it('убирает сортировку, если было отсортировано по убыванию', () => {
    const result = getNewSorting({ by: 'field', order: 'desc' }, 'field');

    expect(result).toEqual(null);
  });
});
