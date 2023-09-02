// Type aliases
function typeAliases() {
  type PostId = string | number;
  type RelatedPosts = (string | number)[];

  type Post = {
    postId: PostId;
    relatedPosts?: RelatedPosts;
  };

  // interface PostName = string | number; // CTE - type aliases not with interface
  let myFirstSelfie: Post = {
    postId: "123", // can be string or number
  };

  // Literal types
  let steve: "Steve"; // type Steve

  // steve = '123'; // CTE
  let anotherSteve: "Steve" = "Steve";
  // let oneMoreSteve: 'Steve' = "Rachel"; // CTE
  let userName: "Dave" | "John" | "Amy"; // using union type, userName can have only one of these three values. kinda like enums
  userName = "Amy";
  // userName = "Rick"; // CTE
}

typeAliases();
