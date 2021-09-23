export class transactionpost{
    constructor(
    public id:number=0,
    public dateandtime:String="", 
    public sender_acc_id:String="",
    public reciever_acc_bic:String="",
    public reciever_name:String="",
    public reciever_acc_no:String="",
    public transfer_type:String="",
    public message:String="",
    public msg_inst:String="",
    public amount:number=0.0,
    public status:number,
    public reason:String=""
    
    ){}
}