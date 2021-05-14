import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Button extends StatelessWidget {
  final void Function() onTap;
  final String text;

  Button(this.onTap, this.text);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(10),
      child: TextButton(
        child:
            Text(this.text, style: TextStyle(color: Colors.red, fontSize: 20)),
        onPressed: this.onTap,
      ),
    );
  }
}
