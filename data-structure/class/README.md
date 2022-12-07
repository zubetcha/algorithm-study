## Objectives

- class가 무엇인지
- 자바스크립트에서 class 개념을 어떻게 구현하는지
- `추상화`, `캡슐화` 및 `다형성`에 대한 정의

## Class

```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

// 그리고 아무일도 없었다.
```

- Class를 정의하는 것만으로는 아무런 변화도 생기지 않는다.
- 정의한 class로 new 키워르를 사용하여 인스턴스를 생성해야 한다.

```javascript
let firstStudent = new Student("Colt", "Steele", 3);
let secondStudent = new Student("Blue", "Steele", 1);
```

## Method

### Instance Method

- 모든 인스턴스에 내장되어 있는 메소드가 아닌, 특정한 단일 인스턴스에 적용되는 기능을 제공하는 메소드
- 아래의 예시에서 `push`는 Array라는 클래스로 생성한 인스턴스에 요소를 추가하는 메소드

```javascript
let data = new Array(1, 2, 3); // [1, 2, 3]

data.push(99) // [1, 2, 3, 99]
```

```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
}

let firstStudent = new Student("Colt", "Steele");
firstStudent.fullName() // Your full name is Colt Steele
```

메소드 추가하기

```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;

    if (this.tardis >= 3) {
      return "YOU ARE EXPELLED!"
    }

    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);

    return this.score;
  }

  calculateAverage() {
    const sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}
```

### Class Method

`static`

- static 키워드는 클래스 자체에 종속되는 반면, 개별 단일 인스턴스 메서드에는 반드시 종속되지는 않아도 되는 메소드들을 생성
- 유틸 함수랑 비슷
- 데이터가 정의되어 있는 하나의 단일 인스턴스와는 관계가 없음

```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  static enrollStudents(...students) {
    return "ENROLLING STUDENTS";
  } 
}

let firstStudent = new Student("Colt", "Steele", 3);
let secondStudent = new Student("Blue", "Steele", 1);

firstStudne.enrollStudents() // X
Student.enrollStudents() //  ENROLLING STUDENTS
```