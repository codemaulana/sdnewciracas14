
import { cleanupOldVisitors } from "../service/visitor-actions";

export default function AdminSettings() {
  return (
    
    <button 
      onClick={async () => {
        const res = await cleanupOldVisitors();
        if(res.success) alert("Data lama berhasil dibersihkan!");
      }}
      className="bg-red-500 text-white p-2 rounded"
    >
      Bersihkan Data Pengunjung lebih dari 1 tahun
    </button>
  );
}