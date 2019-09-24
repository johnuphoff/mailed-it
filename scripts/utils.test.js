import { validAruments } from './utils';

test('stops if args is empty', () => {
  const mockConsoleLog = jest.spyOn(global.console, 'log').mockImplementation(() => {});
  const getArgs = validAruments([]);
  expect(getArgs).toEqual({});
  mockConsoleLog.mockRestore();
});

test('stops if command is missing', () => {
  const mockConsoleLog = jest.spyOn(global.console, 'log').mockImplementation(() => {});
  const getArgs = validAruments(['--name=name', '--type=type']);
  expect(getArgs).toEqual({});
  mockConsoleLog.mockRestore();
});

test('returns arguments object', () => {
  const getArgs = validAruments(['template:create', '--name=name', '--type=type']);
  expect(getArgs).toEqual({ command: 'create', templateName: 'name', templateType: 'type' });
});

test('returns arguments object with undefined templateType', () => {
  const getArgs = validAruments(['template:create', '--name=name']);
  expect(getArgs).toEqual({ command: 'create', templateName: 'name', templateType: undefined });
});

test('returns arguments object with undefined templateName', () => {
  const getArgs = validAruments(['template:create', '--type=type']);
  expect(getArgs).toEqual({ command: 'create', templateName: undefined, templateType: 'type' });
});

test('cleans spaces from type and name', () => {
  const getArgs = validAruments(['template:create', '--nam e=hamburger helper', '--type=ty pe']);
  expect(getArgs).toEqual({
    command: 'create',
    templateName: 'hamburgerhelper',
    templateType: 'type'
  });
});

test('cleans quotes from type and name', () => {
  const getArgs = validAruments(['template:create', '--nam e="hamburgerhelper"', '--type="type"']);
  expect(getArgs).toEqual({
    command: 'create',
    templateName: 'hamburgerhelper',
    templateType: 'type'
  });
});

test('returns command in lower case', () => {
  const getArgs = validAruments(['template:CREATE', '--name="name"', '--type="type"']);
  expect(getArgs).toEqual({
    command: 'create',
    templateName: 'name',
    templateType: 'type'
  });
});
