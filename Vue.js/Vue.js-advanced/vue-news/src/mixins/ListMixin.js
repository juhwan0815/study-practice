// mixin
import bus from "../utils/bus";

export default {
    mounted() {
        bus.$emit('end:spinner');
    }
    // 재사용할 컴포넌트 옵션
    // created() {
    //     bus.$emit('start:spinner');
    //     this.$store.dispatch('FETCH_LIST', this.$route.name)
    //         .then(() => {
    //             console.log('fetched');
    //             bus.$emit('end:spinner');
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }


}

/// hoc
// export default function create(){
//     재사용할 컴포넌트 옵션
// }