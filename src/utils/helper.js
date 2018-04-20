import {generateId} from "./formatTools";

export function getDefaultData (item) {
  const data = {
    activities: [
      {
        id: generateId(),
        name: '고양이밤산책',
        title: '고양이 밤산책',
        guide: '집중력이 낮아지고 호흡이 끊어진다면 뇌가 지쳤다는 신호입니다. 잠깐 밖으로 나와 깊게 호흡해보세요.',
        time:'15',
        day:'7',
        mind:'불안'
      },
      {
        id: generateId(),
        name: '어떻게든이겨먹는아침',
        title: '어떻게든 이겨먹는 아침',
        guide: '철학서를 몇 페이지 읽고 명언을 적어 잘 보이는 곳에 붙이세요. 작은 행동으로 성취감을 느껴보세요.',
        time:'5',
        day:'3',
        mind:'불안'
      },
      {
        id: generateId(),
        name: '10번실패하기',
        title: '10번 실패하기',
        guide: '초안은 언제나 거지같은 법이지만 받아들이기 힘든 사실입니다. 제대로 된 그림이 나오기 까지 10번은 실패하겠다고 다짐해보세요. 조급했던 마음이 가라앉을 겁니다.',
        time:'5',
        day:'',
        mind:'우울'
      },
      {
        id: generateId(),
        name: '두툼한담요두르고차마시기',
        title: '두툼한 담요 두르고 차 마시기',
        guide: '딱 2초만 멈춰보세요. 그리고 뭐라도 하세요.',
        time:'5',
        day:'',
        mind:'우울'
      },

    ],
    categories: [
      {
        id: generateId(),
        name: 'pause',
        path: 'pause'
      },
      {
        id: generateId(),
        name: 'play',
        path: 'play'
      },
    ],
    themes: [
      {
        id: generateId(),
        name:'기상',
        title: "건강한 마음",
        expression: 'X가 되면 행복할 수 있다. Y에 가면 행복할 수 있다. 개나줘라. 행복은 알고리즘이 아니다.',
        category: 'pause',
      },
      {
        id: generateId(),
        name:'굿잠',
        title: '어쨌든 잘했다고 해줘',
        expression: '적어도 오늘 뭐가 병신같았는지 읊으면서 잠들진 말자고',
        category: 'pause',
      },
      {
        id: generateId(),
        name:'걷기',
        title: '나가서 좀 걸어',
        expression: '집중력이 떨어지고 호흡이 끊기면 뇌도 좀 쉬고 싶다는 거야. 엉덩이 들고 일어나서 좀 걸어. 그럴 시간 없다는 말은 집어치워.',
        category: 'pause',
      },
      {
        id: generateId(),
        name:'여행',
        title: '지금 이곳으로 떠나는 여행',
        expression: '저곳이 아닌 이곳에서 나로서 존재하기',
        category: 'pause',
      },
      {
        id: generateId(),
        name:'온더고',
        title: "만드는 사람이 되자고",
        expression: '반드시 그래야만 하는 것은 없어. 못해도 되는 일에서 배우는 삶의 기술',
        category: 'pause',
      },
      {
        id: generateId(),
        name:'운동',
        title: '땀과 호흡에서 느끼는 뭉긋한 생기. 나는 살아 있다.',
        expression: "할거면 하고 말 거면 만다. '어떻게'는 필요 없다.",
        category: 'pause',
      },
      {
        id: generateId(),
        name:'평정심',
        title: '신경끄는 연습',
        expression: "사는게 다 그렇다. 가서 삽질이나 해",
        category: 'play',
      },
      {
        id: generateId(),
        name:'용기',
        title: '부서져야만 하는 순간들',
        expression: '애쓰지마. 시간은 필요한 만큼 걸리니까.',
        category: 'play',
      },
      {
        id: generateId(),
        name:'행복',
        title: '최선을 다하고 흘러가게 두기',
        expression: "좋은 일을 하는 것이 그것만으로 충분 할 때 당신은 그렇게 하면 된다.",
        category: 'play',
      },
      {
        id: generateId(),
        name:'작업',
        title: '인간은 무한 속의 작은 존재',
        expression: "세상이 당신을 중심으로 돌아간다고 믿고 있는 한 당신은 절대로 창의적일 수 없다.",
        category: 'play',
      },
      {
        id: generateId(),
        name:'균형',
        title: '객관적인 관찰자',
        expression: '장기적인 차원에서 생각 할 수 있는 사람은 단기적인 실패나 부진에 불안해하지 않는다.',
        category: 'play',
      },

    ],
    navigation: [
      {
        id: 'home',
        name: 'home',
        path: ''
      },
      {
        id: 'discovery',
        name: 'discovery',
        path: 'discovery'
      },
      {
        id: 'myRandom',
        name: 'myRandom',
      },
    ],
    quotes: [
      "행복으로 가는 길에는 똥덩어리와 치욕이 널려있다.",
      "견딜 수 있는 고통을 선택한다.",
      "매일 덜 틀린 상태로 나아간다.",
      "삶은 무지와 행위로 이루어진다.",
      "행복하려면 뭔가를 해결해야 한다.",
      "나의 문제는 특별하지 않다.",
      "할 거면 하고 말 거면 만다. '어떻게'는 필요 없다.",
      "기분이 더럽군. 그래서 어쩌라고?",
      "뭐라도 한다",
    ],
    user: [
      {
        id: generateId(),
        userName: 'JAY',
        log: [
          {
            activityName:"밤산책고양이",
            // currentDay: 2,
            monkeyGage: 3,
            egoGage: 3,
            doNotTryGage: 1,
            titanGage:5,
            completed:false,
          },
        ],
        lastLogDay: '',
        timeStack: '3K',
        days:2
      },
    ],
    minds: [
      {
        id: generateId(),
        name:'불안',
        title: "오렌지 터널 그리고 불안",
        expression: '기분이 더럽군. 근데 그래서 어쩌라고? 삶은 원래 엉망진창이고 그래도 괜찮다는 사실',
        theme: '평정심',
      },
      {
        id: generateId(),
        name:'우울',
        title: "한낮의 우울",
        expression: '모르거나 틀렸거나 둘 중 하나 일 뿐',
        theme: '평정심',
      },
    ]
    // metric 추가
  };

  return typeof item === 'undefined'
    ? data
    : data[item]
}
