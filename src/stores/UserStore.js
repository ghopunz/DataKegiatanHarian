import { observable, action, computed } from 'mobx';

import moment from 'moment';

class UserStore{

    @observable users = [
        {
            nama:'Asmita', 
            kegiatan: [
                {nama_kegiatan : 'Berangkat sekolah', date: moment()},
            
            ], 
        },
        {
            nama:'Yayan Ruhiyan', 
            kegiatan: [
                {nama_kegiatan : 'Latihan beladiri', date: moment()},
                {nama_kegiatan : 'Seleksi Kejurnas', date: moment().add(1, 'hours')},
                {nama_kegiatan : 'Upacara pengumunan peserta', date: moment().add(2, 'hours')},
            
            ], 
        },
        {
            nama:'Yugi', 
            kegiatan: [
                {nama_kegiatan : 'Main kartu', date: moment()},
            
            ], 
        },
        
    ];

    @computed get listUser(){

        return this.users;
    }

    @action addUser(nama, activity, date){

        let params = {
            nama: nama,
            kegiatan: [{
                nama_kegiatan: activity,
                date: moment(),
            }]
        }
        // for(let i = 0; i <)

        
        // let found = this.users.some(el => el.nama === nama);
        
        let index  = 0;
        let found = false;
        let legth_arr = this.users.length;

        while(!found && index < legth_arr){

            if(this.users[index].nama === nama){
                found = true;
            }
            else{
                index++;
            }
        }
        // alert(index);

        if(found){
            this.users[index].kegiatan.push({
                nama_kegiatan: activity,
                date: moment()
            })
        }
        else{
            this.users.push(params);
        }
        // alert(JSON.stringify(params))
        // this.users.push(params);

    }
}

const userStore = new UserStore();
export default userStore;