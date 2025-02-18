
# Web-Cohort by Great Hitesh Sir and Piyush Sir

## 6-Feb-25 Extra class on github
- Git branching :
- glog command :
- git checkout branchName : Enter in the branch which you want to checkout
- git merge branchName : Enter in the branch which you want to merge
- git checkout -b branchName : Enter in the branch which you want to create. It create a new branch and also switch to the new branch.
- git commit -am "Message" : It will add the message to the last commit. It will add and merge with help of a single command
- squash : It will merge the last two commit into one commit. It will merge only the last commit to the main. git merge --squash
- rebase :

## 8-Feb-2025 Note which are taken by me from that live class:

- Class Goal : Know more about Object, Array, Classes, Polyfill etc.
- Object : In Javascript Object is a data type which stores data in terms of key value pair. like for example
  ```
    const iAmObject = {
        key1 : value1,
        key2 : value2
    }
  ```
  every key-value pair is separedted by a `,` (comma).
- Data Structure : Data structure defines how the data will stored, organized in memory.
- Primitive data type is predefined by the language or we can say that primitive data type is out of the box supported by the language. On the other hand non primitive data type when we assign a non-primitive data type to a new variable, uou are actually copying the reference, not the actual data.
- Difference between Primitive and non-primitive data type -
- To create an object we use {} like ``const iAmObject = {}` then iAmObject refers to an object.
- Stack Memory - Stack memory not grow so dynamically growing data cannot be stored in Stack. Stack use Last In, First Out (LIFO) principle.
- Heap - Heap can dynamically grow ao dynamically growing data stored into heap.
- Trade-off - Trade-off means give something to achive something(Kuch Pane ke liya kuch khona parta hai). Here useing Stack or Heap have some trade-off. Like Read operation in stack is fast but it has limited space. Heap space can be grow dynamically so it has not fall in limited space but the read and write operation in heap is slow.
- Garbage collector - Garbage collection in JS is an memory management process which reclaim or free up the memory occupied by object that are no longer in use.
- Memory leak -
- Spread operator(...) - The spread operator allow us to quickly copy all or part of an existing array or object into another array or object. Its like spreading all attributes.
- Shallow copy - Shallow copy is when we copy the reference of the object not the actual data. Spread operator is used to shallow copy. Because, spead oparator cannot copy inner object of a object. Spread opearator only pass the reference of the inner object or array, where if we change data in any place like original or copy it will reflect on the both. To solve this a new hero arrise which is "DEEP COPY"
- Deep Copy - In deep copy we should aslo assign the inner object so that it creates a completely independent copy of an object and its nested objectts, ensureing that changes to the copy do not affect the original. but here a problem occue which is if there is many more inner object then it is very uncomfortable to assign each and every inner object. Here two term arrise Serialization and De-serialization.
  [Know more with Code](../../CodeToKnow/Week5/objectsPlay.js)

- Best technique for deep copy : The best technique for deep copy is JSON.stringify() and JSON.parse(). The first is knowen as Serialization and second is De-serialization. Serialization convert an object into stream of bytes or like into a form that can be stored or transmitted. Here in case of JSON.stringify() it convert the object into string format. Deserialization is the reverse of serialization like it reconstruct an object from serialized form.

## 9-Feb-2025 Note which are taken by me from that live class:

- Hitesh sir mention some awesome book which help in our personal life.
- Hitesh sir advice : Use console.log() + pen and paper to win the game with JS 👍
- Prototype : Prototype are the inbuild method or property of a array, object, string, etc or say every object in JS. Now when we need to access a property of an object, if the property is not present in the object itself, then the prototype is searching for that property, then also if the property is not found in this level it will go to that prototype's prototype for search and this process is go on and on until either the property is found or return undefined.
- Now there is a question arise who provide or code this inbuild prototype method. The answer is the browser. Browser provide all ptototype properties. Its depend on browser which prototype is used by whom but there is certain guideline for the browser dev to set them so that each browser work same for same prototype. But in some cases the browser don't include some prototype properties in that case we can create our own custom prototype which handle that situation on that particular browser. Here there is a term arise which is "Polyfills"
- Polyfills - Polyfils are like a backup functions so that if any browser dont have any kind of prototype then polyfils comes and solve the issue. Polyfill allows developer to use new JS features in old or outdated enviroment so that the code run successfully at any situation. If we want a polyfills function for any array method like map then the general syntex is like
  ```
  if(!Array.prototype.map){
    Object.prototype.map = function () {
      // set all logic for map
    }
  }
  ```

### Highlighted terms to read more about them :

    1. Buffer recreate -
    2. Quoka extention suggested by Piyush sir
    3. Mux : It is used to deal with video on web page. Its a video API.
    4.
