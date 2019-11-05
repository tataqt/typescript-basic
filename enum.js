var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membersip = Membership.Standart;
var membersipRevers = Membership[2];
console.log(membersip);
console.log(membersipRevers);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VKONTAKTE"] = "Vkontakte";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
