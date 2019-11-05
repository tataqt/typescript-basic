enum Membership {
    Simple,
    Standart,
    Premium
}

const membersip = Membership.Standart;
const membersipRevers = Membership[2];
console.log(membersip);
console.log(membersipRevers);

enum SocialMedia{
    VKONTAKTE = 'Vkontakte',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}