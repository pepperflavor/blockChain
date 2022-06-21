const regex = /foo/; // "global"플래그가 설정 됨

// regex.lastIndex가 0에 있습니다.
console.log(regex.test('foo'));     // true
// 검사시작하는 인덱스 번호가 이전에 검사했던 단어의 음절개수

// regex.lastIndex는 이제 3입니다.
console.log(regex.test('foo'))     // false
console.log(regex.test('foo'))     // false
console.log(regex.test('foo'))     // false

// regex.lastIndex가 0에 있습니다.
console.log(regex.test('barfoo'));  // true
console.log(regex.test('barfoo'));  // true
console.log(regex.test('barfoo'));  // true
console.log(regex.test('barfoo'));  // true

// regex.lastIndex는 6입니다.
console.log(regex.test('foobar'));  //false
console.log(regex.test('foobar'));  //false
console.log(regex.test('foobar'));  //false
console.log(regex.test('foobar'));  //false
console.log(regex.test('foobar'));  //false