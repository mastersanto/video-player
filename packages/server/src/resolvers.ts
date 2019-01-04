const CLIPS = [
  {
    __typename: 'Clip',
    end: 30,
    id: '0',
    name: 'Clip One',
    start: 10
  },
  {
    __typename: 'Clip',
    end: 45,
    id: '1',
    name: 'Clip Two',
    start: 31
  }
];

export default {
  Query: {
    hello(obj: any, { subject }: { subject: string }) {
      return `Hello, ${subject}! from Server`;
    },
    clips: () => CLIPS
    /*
    // @ts-ignore
    clips() {
      return CLIPS;
    }
    */
    /*
    // @ts-ignore
    clips(obj: any, { CLIPS }) {
      return CLIPS;
    }
    */
    /*
    // @ts-ignore
    clips(obj: any, { clips }) {
      return clips && clips.length ? clips : 'uhhhhh';
    }
    */
  }
};
