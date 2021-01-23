import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedLIst';

const nums = new NumbersCollection([10, -3, 5, 12]);
nums.sort();
console.log(nums.data);

const chars = new CharactersCollection('ZYXwvuTSr');
chars.sort();
console.log(chars.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(21);
linkedList.add(13);
linkedList.add(-301);
linkedList.add(-1);
linkedList.add(0);
linkedList.add(1);
linkedList.sort();
linkedList.print();
