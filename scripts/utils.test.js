import { validAruments } from './utils';

test('stops if args is empty', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  validAruments([]);
  expect(mockExit).toHaveBeenCalledWith(0);
});

test('stops if command is missing', () => {
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  validAruments(['--name=name', '--type=type']);
  expect(mockExit).toHaveBeenCalledWith(0);
});

test('returns arguments object', () => {
  const thing = validAruments(['template:create', '--name=name', '--type=type']);
  expect(thing).toEqual({ command: 'create', templateName: 'name', templateType: 'type' });
});

test('returns arguments object with undefined templateType', () => {
  const thing = validAruments(['template:create', '--name=name']);
  expect(thing).toEqual({ command: 'create', templateName: 'name', templateType: undefined });
});

test('returns arguments object with undefined templateName', () => {
  const thing = validAruments(['template:create', '--type=type']);
  expect(thing).toEqual({ command: 'create', templateName: undefined, templateType: 'type' });
});

test('cleans spaces from type and name', () => {
  const thing = validAruments(['template:create', '--nam e=hamburger helper', '--type=ty pe']);
  expect(thing).toEqual({
    command: 'create',
    templateName: 'hamburgerhelper',
    templateType: 'type'
  });
});

test('cleans quotes from type and name', () => {
  const thing = validAruments(['template:create', '--nam e="hamburgerhelper"', '--type="type"']);
  expect(thing).toEqual({
    command: 'create',
    templateName: 'hamburgerhelper',
    templateType: 'type'
  });
});

test('returns command in lower case', () => {
  const thing = validAruments(['template:CREATE', '--name="name"', '--type="type"']);
  expect(thing).toEqual({
    command: 'create',
    templateName: 'name',
    templateType: 'type'
  });
});
