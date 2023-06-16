export interface Recentusers{
    "recentUsersweek":usersChild[],
    "recentUsersMonth":usersChild[],
    "recentUsersSixMonths":usersChild[]
}
export interface usersChild {
    image:string,
    username:string,
    time:string,
    specialization:string
}
