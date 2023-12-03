import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) {
        String datp = JOptionPane.showInputDialog("Ingrese su nombre");
        String apellido = JOptionPane.showInputDialog("Ingrese su apellido");
        JOptionPane.showMessageDialog(null, "Hola " + datp);
        JOptionPane.showMessageDialog(null, "Apellido: " + apellido);
        System.out.println("Hola mundo");
    }
}