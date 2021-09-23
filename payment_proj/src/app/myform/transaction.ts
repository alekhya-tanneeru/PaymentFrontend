export class transaction{
    constructor(
    public sender_acc_id:String="",
    public reciever_acc_bic:String="",
    public reciever_name:String="",
    public reciever_acc_no:String="",
    public amount:number=0.0,
    public message:String="",
    public transfer_type:String="",
    
    ){}
}