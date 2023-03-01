enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  one = "VK",
  two = "FACEBOOK",
  three = "INSTAGRAM",
}

const social = SocialMedia.three;
console.log(social);

const social2 = SocialMedia;
console.log(social2);
