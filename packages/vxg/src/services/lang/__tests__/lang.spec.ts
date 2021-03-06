// Service
import { Lang } from '../index'

// Preset
import { preset } from '../../../presets/default'

describe('$vxg.lang', () => {
  let lang: Lang

  beforeEach(() => {
    lang = new Lang(preset)
  })

  it('should fall back to en', () => {
    Object.assign(lang.locales.en, { foo: 'bar', bar: 'baz' })
    lang.locales.foreign = { foo: 'foreignBar' }
    lang.current = 'foreign'

    expect(lang.t('$vxg.foo')).toBe('foreignBar')

    expect(lang.t('$vxg.bar')).toBe('baz')
    expect('Translation key "bar" not found, falling back to default').toHaveBeenTipped()

    expect(lang.t('$vxg.baz')).toBe('$vxg.baz')
    expect('Translation key "baz" not found, falling back to default').toHaveBeenTipped()
    expect('Translation key "baz" not found in fallback').toHaveBeenWarned()
  })

  it('should ignore unprefixed strings', () => {
    expect(lang.t('foo.bar.baz')).toBe('foo.bar.baz')
  })

  it('should use a different default', () => {
    lang = new Lang({
      ...preset,
      lang: {
        current: 'foreign',
        locales: {
          foreign: { foo: 'foreignBar' },
        },
      },
    })

    expect(lang.t('$vxg.foo')).toBe('foreignBar')
  })

  it('should use a custom translator', () => {
    const translator = jest.fn(str => str)

    lang = new Lang({
      ...preset,
      lang: { t: translator },
    })

    lang.t('$vxg.foobar', 'fizzbuzz')

    expect(translator).toHaveBeenCalledWith('$vxg.foobar', 'fizzbuzz')
  })

  it('should replace params on a non-prefixed key', () => {
    lang = new Lang({
      ...preset,
      lang: { t: str => str },
    })

    const translated = lang.t('{2} bar {0} foo {1}', 'hello', 'world', '!')

    expect(translated).toBe('! bar hello foo world')
  })
})
